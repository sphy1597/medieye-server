const { bcryptPassword, comparePassword } = require("./encryption");
const jwt = require("../utils/jwt_utils");
const { User, Pharmacist, Prescription, Medicine } = require("../models");
const { where } = require("sequelize");

// 약사 >> 처방전 등록
const postPrescription = async (req, res) => {
  const {
    pharmacist_id,
    patient_name,
    qrcode,
    comment,
    prescription_date,
    medicines,
  } = req.body;

  try {
    // 처방전 데이터 생성
    const setResult = await Prescription.create({
      pharmacist_id,
      patient_name,
      qrcode,
      comment,
      prescription_date,
    });

    // 처방전의 약들 리스트 데이터 생성
    for (let medicineInfo of medicines) {
      const { name } = medicineInfo;
      await Medicine.create({
        name,
        prescription_id: prescription_id,
      });
    }

    res.json({
      result: setResult,
      message: "처방전을 등록했습니다",
    });
  } catch (err) {
    console.log("err >> postPrescription : ", err);
    res.json({
      message: "처방전 등록하는 중 오류 발생",
      errCode: "PR1",
    });
  }
};

// 처방전 수정
/* 예외 처리 refect 필요 */
const patchPrescription = async (req, res) => {
  const { pharmacist_id, prescription_id, comment } = req.body;

  try {
    const updateResult = await Prescription.update(
      {
        comment: comment,
      },
      {
        where: {
          prescription_id: prescription_id,
        },
      }
    );

    res.json({
      result: updateResult,
      message: `comment를 수정했습니다. : ${comment}`,
    });
  } catch (err) {
    console.log("err >> patchPrescription : ", err);
    res.json({
      message: "처방전 수정 중 오류발생",
      errCode: "PR2",
    });
  }
};

// 처방전 삭제
const deletePrescription = async (req, res) => {
  const { pharmacist_id, prescription_id } = req.body;
  try {
    const deleteResult = await Prescription.destroy({
      where: {
        pharmacist_id: pharmacist_id,
        prescription_id: prescription_id,
      },
    });

    res.json({
      result: deleteResult,
      message: "처방전을 삭제 했습니다. ",
    });
  } catch (err) {
    console.log("err >> deletePrescription : ", err);
    res.json({
      message: "처방전 삭제 중 오류 발생",
      errCode: "PR3",
    });
  }
};

/* 리스트, 상세 정보 확이 2개 필요 */
// 처방전 리스트 확인
const getListPrescription = async (req, res) => {
  const { pharmacist_id } = req.body;
  try {
    const getListResult = await Prescription.findAll({
      where: {
        pharmacist_id: pharmacist_id,
      },
    });

    res.json({
      result: getListResult,
      message: "처방전 리시트를 확인합니다. ",
    });
  } catch (err) {
    console.log("err >> getListPrescription : ", err);
    res.json({
      message: "처방전 리스트 확인 중 오류 발생",
      errCode: "PR4",
    });
  }
};

// 처방전 상세 정보 검색
const getDetailPrescription = async (req, res) => {
  const { pharmacist_id, prescription_id } = req.body;
  try {
    const getDetailResult = await Prescription.findOne({
      where: {
        pharmacist_id: pharmacist_id,
        prescription_id: prescription_id,
      },
      include: [
        {
          model: Medicine,
          attributes: [id, name],
        },
      ],
    });

    res.json({
      result: getDetailResult,
      message: "처방전을 상세 검색합니다. ",
    });
  } catch (err) {
    console.log("err >> getDetailPrescrtipion : ", err);
    res.json({
      message: "처방전 상세 정보 검색 중 오류 발생",
      errCode: "PR5",
    });
  }
};

module.exports = {
  postPrescription,
  patchPrescription,
  deletePrescription,
  getListPrescription,
  getDetailPrescription,
};

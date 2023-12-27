const { bcryptPassword, comparePassword } = require("./encryption");
const jwt = require("../utils/jwt_utils");
const { User, Pharmacist, Prescription } = require("../models");
const { where } = require("sequelize");

// 약사 >> 처방전 등록
const postPrescription = async (req, res) => {
  const { pharmacist_id, patient_name, qrcode, comment, prescription_date } =
    req.body;

  const setResult = await Prescription.create({
    pharmacist_id,
    patient_name,
    qrcode,
    comment,
    prescription_date,
  });

  res.json({
    result: setResult,
    message: "처방전을 등록했습니다",
  });
};

// 처방전 수정
/* 예외 처리 refect 필요 */
const patchPrescription = async (req, res) => {
  const { pharmacist_id, prescription_id, comment } = req.body;

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
};

// 처방전 삭제
const deletePrescription = async (req, res) => {
  const { pharmacist_id, prescription_id } = req.body;

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
};

/* 리스트, 상세 정보 확이 2개 필요 */
// 처방전 리스트 확인
const getListPrescription = async (req, res) => {
  const { pharmacist_id } = req.body;

  const getListResult = await Prescription.findAll({
    where: {
      pharmacist_id: pharmacist_id,
    },
  });

  res.json({
    result: getListResult,
    message: "처방전 리시트를 확인합니다. ",
  });
};

// 처방전 상세 정보 검색
const getDetailPrescription = async (req, res) => {
  const { pharmacist_id, prescription_id } = req.body;

  const getDetailResult = await Prescription.findOne({
    where: {
      pharmacist_id: pharmacist_id,
      prescription_id: prescription_id,
    },
  });

  res.json({
    result: getDetailResult,
    message: "처방전을 상세 검색합니다. ",
  });
};

module.exports = {
  postPrescription,
  patchPrescription,
  deletePrescription,
  getListPrescription,
  getDetailPrescription,
};

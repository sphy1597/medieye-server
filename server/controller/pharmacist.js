const { bcryptPassword, comparePassword } = require("./encryption");
const jwt = require("../utils/jwt_utils");
const { User, Pharmacist } = require("../models");

// 약사 등록
/* note : 약사 중복 등록 안되도록 기능 추가, 예외처리 필요 */
const postPharmacist = async (req, res) => {
  const { pharmacist_id, password, nickname, pharmacy_name, pharmacy_address } =
    req.body;

  try {
    //bcrypt 암호화
    const hashPw = bcryptPassword(password);

    const pharmacist = await Pharmacist.findOrCreate({
      where: {
        pharmacist_id,
        hashPw,
      },
      default: {
        pharmacist_id,
        hashPw,
        nickname,
        pharmacy_name,
        pharmacy_address,
      },
    });

    res.json({
      result: pharmacist,
      message: "약사 등록이 완료되었습니다.",
    });
  } catch (err) {
    console.log("err >> postPharmacist : ", err);
    res.json({
      message: "약사 등록 중 오류 발생",
      errCode: "PH1",
    });
  }
};

// 약사 정보 수정
/* note : 등록과 마찬가지로 유저 존재 여부 확인, 예외처리 필요 */
const patchPharmacist = async (req, res) => {
  const { pharmacist_id, nickname, pharmacy_name, pharmacy_address } = req.body;

  try {
    const patchResult = await Pharmacist.update(
      {
        nickname,
        pharmacy_name,
        pharmacy_address,
      },
      {
        where: { pharmacist_id: pharmacist_id },
      }
    );

    res.json({
      result: patchResult,
      message: "정보 수정 완료했습니다. ",
    });
  } catch (err) {
    console.log("err >> patchPharmacist : ", err);
    res.json({
      message: "약사 정보 수정 중 오류 발생",
      errCode: "PH2",
    });
  }
};

// 약사 정보 삭제
/* 존재 여부 확인 및 예외 처리 필요 */
const deletePharmacist = async (req, res) => {
  const { pharmacist_id } = req.body;

  try {
    const deleteResult = await Pharmacist.destroy({
      where: { pharmacist_id: pharmacist_id },
    });

    res.json({
      result: deleteResult,
      message: "약사 정보를 삭제하였습니다. ",
    });
  } catch (err) {
    console.log("err >> deletePharmacist : ", err);
    res.json({
      message: "약사정보 삭제 중 오류 발생",
      errCode: "PH3",
    });
  }
};

// 약사 정보 확인
/* 권한이 있는 사람만 확인 할 수 있도록 처리 필요 */
const getPharmacist = async () => {
  const { pharmacist_id } = req.body;

  try {
    const getPharmacist = await Pharmacist.findAll({
      where: { pharmacist_id: pharmacist_id },
    });

    res.json({
      result: getPharmacist,
      message: `${pharmacist_id}에 대한 정보입니다.`,
    });
  } catch (err) {
    console.log("err >> getPharmacist : ", err);
    res.json({
      message: "약사 정보 확인중 오류 발생",
      errCode: "PH4",
    });
  }
};

module.exports = {
  postPharmacist,
  patchPharmacist,
  deletePharmacist,
  getPharmacist,
};

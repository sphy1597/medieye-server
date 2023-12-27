const { bcryptPassword, comparePassword } = require("./encryption");
const jwt = require("../utils/jwt_utils");
const { User, Presciption, QRcode } = require("../models");

// 개인 QR 리스트 저장
const postUserQR = async (req, res) => {
  const { user_id, qrcode } = req.body;

  // note : 원래 있을때, 없을때 구분해서 결과 생성해야됨
  const userqrResult = await QRcode.findOrCreate({
    where: { qrcode: qrcode },
    default: { user_id: user_id, qrcode: qrcode },
  });

  res.json({
    message: "리스트에 QR코드를 추가했습니다.",
    result: userqrResult,
  });
};

// QR 리스트 삭제
const deleteUserQR = async (req, res) => {
  const { user_id, qrcode } = req.body;

  const deleteResult = await QRcode.destroy({
    where: {
      qrcode: qrcode,
    },
  });

  res.json({
    message: "qrcode리스트를 삭제했습니다. ",
    result: deleteResult,
  });
};

// 유저들이 등록한 기능 추가
const getUserQRList = async (req, res) => {
  const { user_id } = req.body;
  const getListResult = await QRcode.findAll({
    where: { user_id: user_id },
  });

  res.json({
    message: "qrcode 리스트를 검색합니다.",
    result: getListResult,
  });
};

// note: 같은 기능이 있으니까 하나로 만드는것도 나쁘지 않을듯
const getUserQRDetail = async (req, res) => {
  const { user_id, qrcode } = req.body;

  const getResult = await Presciption.findOne({
    where: { user_id: user_id, qrcode: qrcode },
    include: [
      {
        model: Medicine,
        attributes: ["name"],
      },
    ],
  });

  res.json({
    message: "상세정보를 검색합니다.",
    result: getResult,
  });
};

module.exports = { postUserQR, getUserQRList, deleteUserQR, getUserQRDetail };

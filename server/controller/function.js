const { bcryptPassword, comparePassword } = require("./encryption");
const jwt = require("../utils/jwt_utils");
const { User, Presciption, QRcode } = require("../models");

// QR코드 체크
const getCheckQR = async (req, res) => {
  const { QRcodeInfo } = req.body;
  try {
    const searchResult = await Presciption.findOne({
      where: {
        qrcode: QRcodeInfo,
      },
      include: [
        {
          model: Medicine,
          attributes: ["name"],
        },
      ],
    });

    if (searchResult) {
      // 등록된 QR일 때
      res.json({
        message: "등록된 QR 정보입니다. ",
        result: searchResult,
      });
    } else {
      // 등록된 등록된 QR이 아닐떄
      res.json({
        message: "등록된 QR이 아닙니다. ",
        QRLink: QRcodeInfo,
      });
    }
  } catch (err) {
    console.log("err >> getCheckQR : ", err);

    res.json({
      message: "QR등록 여부 확인 중 오류 발생",
      errCode: "FN1",
    });
  }
};

// 표준코드, 품목기준코드로 검색 기능
const getKDcode = async (req, res) => {
  const { KDcode } = req.body;

  //api로 정보 가져오는 기능
};

// 이름으로 검색 기능
const getMediName = async (req, res) => {
  const { name } = req.body;
  //api로 이름 가져오기
};

module.exports = { getCheckQR, getKDcode, getMediName };

const { DataTypes, Sequelize, INTEGER } = require("sequelize");

// DB data
const QRcode = (sequelize) => {
  return sequelize.define("QRcode", {
    qrcode_id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    Qrcode_info: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });
};

module.exports = QRcode;

const { DataTypes, Sequelize, INTEGER } = require("sequelize");

// DB data
const Pharmacist = (sequelize) => {
  return sequelize.define("pharmacist", {
    pharmacist_id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    nickname: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: user_id,
    },
    pharmacy_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    pharmacy_address: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });
};

module.exports = Pharmacist;

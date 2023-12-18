const { DataTypes, Sequelize, INTEGER } = require("sequelize");

// DB data
const User = (sequelize) => {
  return sequelize.define("user", {
    user_id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    patient_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: user_id,
    },
  });
};

module.exports = User;

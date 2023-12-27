const { DataTypes, Sequelize, INTEGER } = require("sequelize");

// DB data
const Medicine = (sequelize) => {
  return sequelize.define("medicine", {
    medicine_id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    prescription_id: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    medicine_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: user_id,
    },
  });
};

module.exports = Medicine;

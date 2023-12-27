const { DataTypes, Sequelize, INTEGER } = require("sequelize");

// DB data
const Prescription = (sequelize) => {
  return sequelize.define("prescription", {
    prescription_id: {
      type: Sequelize.STRING(100),
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    pharmacist_id: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    patient_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    qrcode: {
      type: Sequelize.STRING(100),
      unique: true,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    prescription_date: {
      type: DataTypes,
      allowNull: false,
    },
  });
};

module.exports = Prescription;

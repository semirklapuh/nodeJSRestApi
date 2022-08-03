const { DataTypes } = require("sequelize");

const db = require("../config/database");

const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
    Position: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;

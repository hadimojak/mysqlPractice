const { Sequelize } = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define(
  "User",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING },
  },
  { freezeTableName: true }
);

module.exports = User;

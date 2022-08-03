const Sequalize = require("sequelize");

module.exports = new Sequalize("node", "postgres", "123", {
  host: "localhost",
  dialect: "postgres",
  port: "5467",
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

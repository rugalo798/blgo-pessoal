const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress", "rugalo", "celenita1", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;

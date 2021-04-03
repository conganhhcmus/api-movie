const dbConfig = require("../config/db.config");
const knex = require("knex")(dbConfig.aws_mysql);

module.exports = knex;

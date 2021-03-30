const dbConfig = require("../config/db.config");
const knex = require("knex")(dbConfig.mysql);

module.exports = knex;

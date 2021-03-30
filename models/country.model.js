const db = require("../utils/db");

module.exports = {
    all() {
        return db("country");
    },

    async single(id) {
        const countries = await db("country").where("country_id", id);
        if (countries.length === 0) {
            return null;
        }
        return countries[0];
    },

    add(country) {
        return db("country").insert(country);
    },

    delete(id) {
        return db("country").del().where("country_id", id);
    },

    update(id, country) {
        return db("country").where("country_id", id).update(country);
    }
};

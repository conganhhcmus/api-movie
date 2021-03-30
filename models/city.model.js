const db = require("../utils/db");

module.exports = {
    all() {
        return db("city");
    },

    async single(id) {
        const cities = await db("city").where("city_id", id);
        if (cities.length === 0) {
            return null;
        }
        return cities[0];
    },

    add(city) {
        return db("city").insert(city);
    },

    update(id, city) {
        return db("city").where("city_id", id).update(city);
    },

    delete(id) {
        return db("city").where("city_id", id).del();
    },

    async findByCountryId(countryId) {
        const cities = await db("city").where("country_id", countryId);
        if (cities.length === 0) {
            return null;
        }
        return cities[0];
    },
};

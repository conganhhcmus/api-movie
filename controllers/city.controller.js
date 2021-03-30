const cityModel = require("../models/city.model");
const countryModel = require("../models/country.model");

module.exports = {
    getAll: async function (req, res) {
        const list = await cityModel.all();
        res.json(list);
    },

    getById: async function (req, res) {
        const id = req.params.id || 0;
        const city = await cityModel.single(id);
        if (city === null) {
            return res.status(204).end();
        }
        res.json(city);
    },

    create: async function (req, res) {
        const city = req.body;

        const country = await countryModel.single(city.country_id);
        if (country === null) {
            return res
                .status(400)
                .json({ country_id: "no match country_id" });
        }

        const ids = await cityModel.add(city);
        city.city_id = ids[0];
        res.status(201).json(city);
    },

    delete: async function (req, res) {
        const id = req.params.id || 0;
        const ans = await cityModel.delete(id);

        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    update: async function (req, res) {
        const id = req.params.id;
        const city = req.body;

        const country = await countryModel.single(city.country_id);
        if (country === null) {
            return res
                .status(400)
                .json({ country_id: "no match country_id" });
        }

        const ans = await cityModel.update(id, city);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },
};

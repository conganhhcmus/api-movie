const countryModel = require("../models/country.model");

module.exports = {
    create: async function (req, res) {
        const country = req.body;
        const ids = await countryModel.add(country);
        country.country_id = ids[0];
        res.status(201).json(country);
    },

    update: async function (req, res) {
        const id = req.params.id;
        const country = req.body;
        const ans = await countryModel.update(id, country);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    delete: async function (req, res) {
        const id = req.params.id || 0;
        const ans = await countryModel.delete(id);

        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    getAll: async function (req, res) {
        const list = await countryModel.all();
        res.json(list);
    },

    getById: async function (req, res) {
        const id = req.params.id || 0;
        const country = await countryModel.single(id);
        if (country === null) {
            return res.status(204).end();
        }
        res.json(country);
    },
};

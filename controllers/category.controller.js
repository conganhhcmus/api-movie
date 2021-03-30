const categoryModel = require("../models/category.model");

module.exports = {
    getAll: async function (req, res) {
        const list = await categoryModel.all();
        res.json(list);
    },

    getById: async function (req, res) {
        const id = req.params.id || 0;
        const category = await categoryModel.single(id);
        if (category === null) {
            return res.status(204).end();
        }
        res.json(category);
    },

    create: async function (req, res) {
        const category = req.body;
        const ids = await categoryModel.add(category);
        category.category_id = ids[0];
        res.status(201).json(category);
    },

    delete: async function (req, res) {
        const id = req.params.id || 0;
        const ans = await categoryModel.delete(id);

        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    update: async function (req, res) {
        const id = req.params.id;
        const category = req.body;
        const ans = await categoryModel.update(id, category);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },
};

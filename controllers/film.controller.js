const filmModel = require("../models/film.model");

module.exports = {
    create: async function (req, res) {
        const film = req.body;
        const ids = await filmModel.add(film);
        film.film_id = ids[0];
        res.status(201).json(film);
    },

    update: async function (req, res) {
        const id = req.params.id;
        const film = req.body;
        const ans = await filmModel.update(id, film);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    delete: async function (req, res) {
        const id = req.params.id || 0;
        const ans = await filmModel.delete(id);

        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    getAll: async function (req, res) {
        const list = await filmModel.all();
        res.json(list);
    },

    getById: async function (req, res) {
        const id = req.params.id || 0;
        const film = await filmModel.single(id);
        if (film === null) {
            return res.status(204).end();
        }
        res.json(film);
    },

    deleteMultiple: async function (req, res) {
        const films = req.body;
        const ans = await filmModel.deleteMultiple(films.id);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },
};

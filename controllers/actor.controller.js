const actorModel = require("../models/actor.model");

module.exports = {
    getAll: async function (req, res) {
        const list = await actorModel.all();
        res.json(list);
    },

    getById: async function (req, res) {
        const id = req.params.id || 0;
        const actor = await actorModel.single(id);
        if (actor === null) {
            return res.status(204).end();
        }
        res.json(actor);
    },

    create: async function (req, res) {
        const actor = req.body;
        const ids = await actorModel.add(actor);
        actor.actor_id = ids[0];
        res.status(201).json(actor);
    },

    delete: async function (req, res) {
        const id = req.params.id || 0;
        const ans = await actorModel.delete(id);

        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    update: async function (req, res) {
        const id = req.params.id;
        const actor = req.body;
        const ans = await actorModel.update(id, actor);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },

    deleteMultiple: async function (req, res) {
        const actors = req.body;
        const ans = await actorModel.deleteMultiple(actors.id);
        if (ans === 0) {
            return res.status(400).json({ success: false });
        }
        res.status(202).json({ success: true });
    },
};

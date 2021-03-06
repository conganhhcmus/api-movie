const db = require("../utils/db");

module.exports = {
    all() {
        return db("actor");
    },

    async single(id) {
        const actors = await db("actor").where("actor_id", id);
        if (actors.length === 0) {
            return null;
        }
        return actors[0];
    },

    add(actor) {
        return db("actor").insert(actor);
    },

    update(id, actor) {
        return db("actor").where("actor_id", id).update(actor);
    },

    delete(id) {
        return db("actor").where("actor_id", id).del();
    },
    deleteMultiple(actors) {
        return db("actor").whereIn("actor_id", actors).del();
    },
};

const express = require("express");
const actorController = require("../controllers/actor.controller");

const router = express.Router();

const schema = require("../schemas/actor.json");

router.get("/", actorController.getAll);
router.get("/:id", actorController.getById);
router.post(
    "/",
    require("../middlewares/validate.mdw")(schema.create),
    actorController.create
);
router.delete("/:id", actorController.delete);
router.delete("/", actorController.deleteMultiple);
router.put(
    "/:id",
    require("../middlewares/validate.mdw")(schema.updateFull),
    actorController.update
);
router.patch(
    "/:id",
    require("../middlewares/validate.mdw")(schema.update),
    actorController.update
);

module.exports = router;

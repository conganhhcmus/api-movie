const express = require("express");

const filmController = require("../controllers/film.controller");

const router = express.Router();

router.get("/", filmController.getAll);

router.get("/:id", filmController.getById);

const schema = require("../schemas/film.json");
router.post(
    "/",
    require("../middlewares/validate.mdw")(schema.create),
    filmController.create
);

router.delete("/:id", filmController.delete);

router.patch(
    "/:id",
    require("../middlewares/validate.mdw")(schema.update),
    filmController.update
);

router.put(
    "/:id",
    require("../middlewares/validate.mdw")(schema.updateFull),
    filmController.update
);

module.exports = router;

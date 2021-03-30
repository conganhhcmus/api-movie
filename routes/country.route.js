const express = require("express");
const countryController = require("../controllers/country.controller");

const router = express.Router();

router.get("/", countryController.getAll);

router.get("/:id", countryController.getById);

const schema = require("../schemas/country.json");
router.post(
    "/",
    require("../middlewares/validate.mdw")(schema.create),
    countryController.create
);

router.delete("/:id", countryController.delete);

router.patch(
    "/:id",
    require("../middlewares/validate.mdw")(schema.update),
    countryController.update
);

router.put(
    "/:id",
    require("../middlewares/validate.mdw")(schema.updateFull),
    countryController.update
);

module.exports = router;

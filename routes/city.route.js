const express = require("express");
const cityController = require("../controllers/city.controller");

const router = express.Router();

const schema = require("../schemas/city.json");

router.get("/", cityController.getAll);
router.get("/:id", cityController.getById);
router.post(
    "/",
    require("../middlewares/validate.mdw")(schema.create),
    cityController.create
);
router.delete("/:id", cityController.delete);
router.put(
    "/:id",
    require("../middlewares/validate.mdw")(schema.updateFull),
    cityController.update
);
router.patch(
    "/:id",
    require("../middlewares/validate.mdw")(schema.update),
    cityController.update
);

module.exports = router;

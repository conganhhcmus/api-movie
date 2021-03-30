const express = require("express");
const categoryController = require("../controllers/category.controller");

const router = express.Router();

const schema = require("../schemas/category.json");

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post(
    "/",
    require("../middlewares/validate.mdw")(schema.create),
    categoryController.create
);
router.delete("/:id", categoryController.delete);
router.put(
    "/:id",
    require("../middlewares/validate.mdw")(schema.updateFull),
    categoryController.update
);
router.patch(
    "/:id",
    require("../middlewares/validate.mdw")(schema.update),
    categoryController.update
);

module.exports = router;

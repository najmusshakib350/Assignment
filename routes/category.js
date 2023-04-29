const express = require("express");
const {
  createCategory,
  getAllCategory,
  updateCategory,
} = require("./../controllers/category");
const router = express.Router();

router.route("/create").post(createCategory);
router.route("/").get(getAllCategory);
router.route("/:id").patch(updateCategory);

module.exports = router;

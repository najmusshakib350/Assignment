const express = require("express");
const {
  createProduct,
  getAllProduct,
  updateProduct,
  singleProduct,
} = require("./../controllers/product");
const router = express.Router();

router.route("/create").post(createProduct);
router.route("/").get(getAllProduct);
router.route("/:id").patch(updateProduct);
router.route("/:id").get(singleProduct);

module.exports = router;

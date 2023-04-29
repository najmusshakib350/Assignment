const catchAsync = require("../utils/catchasync");
const APIFeatures = require("./../utils/apiFeatures");
const knex = require("./../database");

// create product
module.exports.createProduct = catchAsync(async function (req, res, next) {
  await knex("product").insert({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    size: req.body.size,
    color: req.body.color,
    category_id: req.body.category_id,
  });

  return res.status(201).json({
    status: "ok",
  });
});

// getAll product

module.exports.getAllProduct = catchAsync(async function (req, res, next) {
  const featuresInstance = new APIFeatures(req.query);
  const products = await featuresInstance.filter();
  return res.status(200).json({
    status: "ok",
    products,
  });
});

// update product

module.exports.updateProduct = catchAsync(async function (req, res, next) {
  await knex("product").where("id", "=", req.params.id).update(req.body);

  return res.status(200).json({
    status: "ok",
  });
});

// single product

module.exports.singleProduct = catchAsync(async function (req, res, next) {
  const product = await knex
    .select("*")
    .from("product")
    .where("id", "=", req.params.id);
  return res.status(200).json({
    status: "ok",
    product,
  });
});

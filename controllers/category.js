const catchAsync = require("../utils/catchasync");

const knex = require("./../database");
// create category
module.exports.createCategory = catchAsync(async function (req, res, next) {
  await knex("category").insert({
    parent_id: req.body.parent_id,
    category: req.body.category,
  });

  return res.status(201).json({
    status: "ok",
  });
});
// getAll category

module.exports.getAllCategory = catchAsync(async function (req, res, next) {
  const categorys = await knex.select("*").from("category");

  return res.status(200).json({
    status: "ok",
    categorys,
  });
});

// update category

module.exports.updateCategory = catchAsync(async function (req, res, next) {
  await knex("category").where("id", "=", req.params.id).update(req.body);

  return res.status(200).json({
    status: "ok",
  });
});

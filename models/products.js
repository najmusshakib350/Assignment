const knex = require("./../database");
const product = knex.schema.createTable("product", function (table) {
  table.increments("id").primary();
  table.string("name").notNullable();
  table.string("description");
  table.integer("price");
  table.string("size");
  table.string("color");
  table.integer("category_id");
  table.foreign("category_id").references("category.id");
  table.timestamps();
});

module.exports = product;

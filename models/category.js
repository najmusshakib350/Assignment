const knex = require("./../database");
const category = knex.schema.createTable("category", function (table) {
  table.increments("id").primary();
  table.integer("parent_id").notNullable().defaultTo("0");
  table.string("category").notNullable();
  table.timestamps();
});

module.exports = category;

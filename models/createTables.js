const category = require("./category");
const product = require("./products");

async function createTables() {
  try {
    await category;
    await product;
  } catch (err) {}
}
createTables().then(function () {
  console.log("Table created!");
});

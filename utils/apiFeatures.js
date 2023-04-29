const knex = require("./../database");
class APIFeatures {
  constructor(queryObject) {
    this.queryObject = queryObject;
  }

  //Filtering product by price
  filter() {
    const queryObj = {
      // queryObj={price:300,name:"Laptop",}
      ...this.queryObject,
    };
    const excludeFields = ["category_id"];
    excludeFields.forEach((el) => delete queryObj[el]);

    return knex
      .select("*")
      .from("product")
      .where(function () {
        this.where("name", "=", queryObj.name).orWhere(function () {
          this.where("price", "<=", queryObj.price);
        });
      });
  }
}
module.exports = APIFeatures;

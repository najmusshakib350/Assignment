const express = require("express");
const AppError = require("./utils/apperror");
const GlobalError = require("./controllers/errorcontroller");
const categoryRouter = require("./routes/category");
const productRouter = require("./routes/product");

const app = express();

// parse json data
app.use(express.json());

// //Router mount

app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);

app.all("*", (req, res, next) => {
  return next(
    new AppError(`can not findout this url: ${req.originalUrl}`, 404)
  );
});

app.use(GlobalError);
module.exports = app;

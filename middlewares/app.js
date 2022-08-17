const express = require("express");
const app = express();
const userRoute = require("./../routes/userRoute");
const errorController = require("./../controller/errorController");
const router = require("../routes/paymentRoute");
const viewRouter = require("../routes/viewRoute");

app.use(express.json());
app.use(express.urlencoded());
app.set("view engine", "pug");
app.set("views", `${__dirname}/../views`);

app.use("/", viewRouter);
app.use("/api/v1/users", userRoute);
app.use("/api/v1", router);

app.all("*", function (req, res, next) {
  next(new AppError(`this url has not found: ${req.originalUrl}`, 404));
});
app.use(errorController);
module.exports = app;

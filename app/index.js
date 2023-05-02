const express = require("express");

const sequelize = require("./util/database");
const Titles = require("./models/titlesModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  next();
});
app.use("/api/v1/titles", require("./v1/routes/titlesRoutes"));

(async () => {
  try {
    app.listen(process.env.EXTERNAL_PORT || 3000);
  } catch (error) {
    console.error(error);
  }
})();

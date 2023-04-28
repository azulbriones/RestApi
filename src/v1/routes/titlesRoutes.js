const express = require("express");
const router = express.Router();
const titlesController = require("../../controllers/titlesController");

router
  .get("/", titlesController.getAll)

  .get("/:id", titlesController.getOne)

  .post("/", titlesController.createOne)

  .put("/:id", titlesController.updateOne)

  .delete("/:id", titlesController.deleteOne);

module.exports = router;

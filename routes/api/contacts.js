const express = require("express");

const router = express.Router();
const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
} = require("../../controllers");
const { controllerWrapper } = require("../../middlewares");

router.get("/", controllerWrapper(getAll));

router.get("/:id", controllerWrapper(getById));

router.post("/", controllerWrapper(add));

router.put("/:id", controllerWrapper(updateById));

router.delete("/:id", controllerWrapper(removeById));

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getAllTodos,
  getSpecificTodo,
  addTodo,
} = require("../controllers/todos.js");

router.get("/", getAllTodos);
router.get("/:id", getSpecificTodo);
router.post("/", addTodo);

module.exports = router;

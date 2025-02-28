const cors = require("cors");
const express = require("express");
require("dotenv").config();
const db = require("../util/db-connect.js");
const indexRoute = require("./routes/index.js");
const todosRoute = require("./routes/todos.js");
const usersRoute = require("./routes/users.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use("/", indexRoute);
app.use("/todos", todosRoute);
app.use("/users", usersRoute);

app.delete("/todos/:id", (req, res) => {
  // const id = req.params.id;
  // console.log(id);
  // const indexToDelete = todos.findIndex((todo) => todo.id == id);
  // if (indexToDelete < 0) {
  //   return res.status(404).json({ message: `Resource not found` });
  // }
  // todos.splice(indexToDelete, 1);
  // return res.json({ message: `Todo ${id} deleted` });
});

app.patch("/todos/:id", (req, res) => {
  // const id = req.params.id;
  // const indexToPatch = todos.findIndex((todo) => todo.id == id);
  // if (indexToPatch < 0) {
  //   return res.status(404).json({ message: `Resource not found` });
  // }
  // const patchedTodo = { ...todos[indexToPatch], ...req.body };
  // todos[indexToPatch] = patchedTodo;
  // return res.json(patchedTodo);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

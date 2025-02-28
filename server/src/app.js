const cors = require("cors");
const express = require("express");
require("dotenv").config();
const db = require("../util/db-connect.js");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get("/", (request, response) => {
  response.send("Welcome to the Express Practice App!");
});

app.get("/about", (request, response) => {
  response.send("This is a practice application for learning Express.js");
});

app.get("/todos", async (req, res) => {
  const todos = await db.select().from("todos");

  res.json(todos);
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;

  const todo = await db.select().from("todos").where("id", id).first();

  if (!todo) {
    return res.status(404).json({ message: "No tasks, enjoy your day off!" });
  }

  res.json(todo);
});

app.post("/todos", async (req, res) => {
  if (!req.body) {
    return res.send("There was no request body");
  }

  const task = await db.select().from("todos").where("task", req.body.task);

  if (task.length) {
    return res.send("This todo was already added");
  }

  await db("todos").insert({ ...req.body });

  res.json({ message: "Todo added successfully" });
});

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

app.post("/users", async (req, res) => {
  if (!req.body.email) {
    return res.send("Please check if your body has email property");
  }

  const existedUser = await db
    .select("email")
    .from("users")
    .where("email", req.body.email)
    .first();

  if (existedUser) {
    return res.json({ message: "This user already exists", user: existedUser });
  }

  const newUser = await db("users").insert(req.body).returning("*");

  return res.json({
    message: "A user was added succesfully",
    user: newUser[0],
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

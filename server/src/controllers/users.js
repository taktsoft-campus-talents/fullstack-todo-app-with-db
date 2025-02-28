const db = require("../../util/db-connect.js");

async function addUser(req, res) {
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
}

module.exports = { addUser };

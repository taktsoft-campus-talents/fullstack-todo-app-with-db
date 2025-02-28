async function showWelcomeMessage(req, res) {
  res.send("Welcome to the Express Practice App!");
}

async function showAboutMessage(req, res) {
  res.send("This is a practice application for learning Express.js");
}

module.exports = { showWelcomeMessage, showAboutMessage };

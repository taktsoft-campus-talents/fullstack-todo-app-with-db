const express = require("express");
const { showWelcomeMessage, showAboutMessage } = require("../controllers");

const router = express.Router();

router.get("/", showWelcomeMessage);
router.get("/about", showAboutMessage);

module.exports = router;

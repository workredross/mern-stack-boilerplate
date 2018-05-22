const express = require("express");
const router = express.Router();

const helloWorldController = require("../controllers/HelloWorldController");

router.get("/", helloWorldController.home);

module.exports = router;

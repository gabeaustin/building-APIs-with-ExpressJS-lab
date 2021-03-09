const express = require("express");
const chirpsRouter = require("./chirps");

let router = express.Router();

// middleware
router.use("/chirps", chirpsRouter);

module.exports = router;
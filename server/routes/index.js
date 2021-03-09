const express = require("express");
const chirpsRouter = require("./chirps");

let router = express.Router();

// middleware
// we got here from localhost:3000/api, now this tells
// the computer to use chirps.js when /chirps is added to the url
router.use("/chirps", chirpsRouter);

module.exports = router;
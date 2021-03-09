const express = require("express");
const chirpRouter = require("../chirps");

let router = express.Router();

// middleware
app.use("/chirps", chirpsRouter);

module.exports = router;
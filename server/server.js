const express = require("express");
const apiRouter = require("/routes");

let app = express();

app.use("/api", apiRouter);

// listen for requests
app.listen(3000, function() {
    console.log("now listening for requests");
});
const express = require("express");
const cors = require("cors");
const apiRouter = require("../server/routes");

let app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

// listen for requests
app.listen(3000, function() {
    console.log("now listening for requests");
});
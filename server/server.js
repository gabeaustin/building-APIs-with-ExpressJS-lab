const express = require("express");
const cors = require("cors");
const port = 3000;
const apiRouter = require("../server/routes");

let app = express();

app.use(cors());
app.use(express.json());
app.use("/api", apiRouter);

// listen for requests
app.listen(port, function() {
    console.log(`now listening for requests on port http://localhost:${port}`);
});
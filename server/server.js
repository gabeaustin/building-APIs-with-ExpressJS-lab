const express = require("express");
const cors = require("cors");
const port = 3000;
const apiRouter = require("../server/routes");

let app = express();

app.use(cors());
app.use(express.json());
//tells computer to use the routes folder when they go to localhost:3000/api
//(see line 4)
app.use("/api", apiRouter);

// listen for requests
app.listen(port, () => {
    console.log(`now listening for requests on port: ${port}.`);
});
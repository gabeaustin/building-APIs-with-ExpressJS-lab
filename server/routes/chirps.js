const express = require("express");
let router = express.Router();

router.get("/", function(req, res) {
    res.send({ type: "GET" }); // may not be necessary
    res.json(data);
});

router.post("/", function(req, res) {
    // res.send({
    //     what key value pairs do I need to send
    // });
    res.json(id);
});

router.put("/:id", function(req, res) {
    res.send({ type: "PUT" });  // may not be necessary
    res.sendStatus(200);
});

router.delete("/:id", function(req, res) {
    res.send({ type: "DELETE" });  // may not be necessary
    res.sendStatus(200);
});

// this is how we can use these in the index.js file
module.exports = router;  // router from line 2
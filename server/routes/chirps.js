const express = require("express");
const chirpStore = require("../chirpstore");
let router = express.Router();

router.get("/:id?", function(req, res) {
    let id = req.params.id;
    if(id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
    res.send({ type: "GET" }); // used as a test to see if working
    // res.json(data);
});

router.post("/", function(req, res) {
    res.send({ type: "POST" }); // used as a test to see if working
    // res.sendStatus(200);
    // res.json(id);
});

router.put("/:id", function(req, res) {
    res.send({ type: "PUT" });  // used as a test to see if working
    res.sendStatus(200);
});

router.delete("/:id", function(req, res) {
    res.send({ type: "DELETE" });  // used as a test to see if working
    res.sendStatus(200);
});

// this is how we can use these in the index.js file
module.exports = router;  // router from line 2
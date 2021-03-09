const express = require("express");
const chirpStore = require("../chirpstore");
let router = express.Router();

// GET
router.get("/:id?", function(req, res) {
    let id = req.params.id;
    if(id) {
        res.send(chirpStore.GetChirp(id))
    } else {
        res.send(chirpStore.GetChirps())
    }
});

// POST
router.post("/", function(req, res) {
    chirpStore.CreateChirp(req.body);
    res.send('Chirp created') // used as a test to see if working
});

// PUT
router.put("/:id", function(req, res) {
    let id = req.params.id;
    chirpStore.UpdateChirp(id, req.body);
    res.send({ type: "PUT" });  // used as a test to see if working
});

// DELETE
router.delete("/:id", function(req, res) {
    chirpStore.DeleteChirp(req.body);
    res.send({ type: "DELETE" });  // used as a test to see if working
});

// this is how we can use these in the index.js file
module.exports = router;  // router from line 2
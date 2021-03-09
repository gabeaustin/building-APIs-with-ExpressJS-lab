const fs = require('fs');
let chirps = { nextid: 0 };

if(fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

// GET
let getChirps = () => {
    return Object.assign({}, chirps); //create a copy and return it
}

// GET
let getChirp = id => {
    return Object.assign({}, chirps[id]); //create a copy and return it
}

// CREATE / POST
let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

// UPDATE / PUT
let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

// DELETE
let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}
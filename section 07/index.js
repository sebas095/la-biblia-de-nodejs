const express = require('express');
const server = express();
const fs = require('fs');

const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');

server.get('/', (req, res) => {
    res.end(home);
});

server.get('/about', (req, res) => {
    res.end(about);
});

server.listen(8080, () => {
    console.log("Server is running on port " + 8080);
});

// HTTPS methods

// GET => lectura
// POST => crear un nuevo recurso
// PUT => reemplazar un recurso existente
// PATCH => actualizar una propiedad de un recurso
// DELETE => remover un recurso
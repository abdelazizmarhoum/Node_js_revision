const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('./home.html', 'utf8', (err, data) => {
        if (err) {
            res.send("Erreur de lecture de home.html");
        } else {
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log("Serveur en écoute sur http://localhost:3000");
});

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

// Ajouter le middleware body-parser AVANT les routes
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log('running on port', port);
});

// Afficher le formulaire
app.get('/', (req, res) => {
    fs.readFile('./form.html', (err, data) => {
        if (err) {
            res.end('Error !');
        } else {
            res.end(data);
        }
    });
});

// Traiter la somme
app.post('/somme', (req, res) => {
    let v1 = parseInt(req.body.v1);
    let v2 = parseInt(req.body.v2);

    let somme = v1 + v2;
    res.send('La somme est : ' + somme);
});

// Traiter d'autres données
app.post('/', function (req, res) {
    let nom = req.body.no;
    console.log("le nom est ", nom);
    res.send("Nom reçu : " + nom);
});

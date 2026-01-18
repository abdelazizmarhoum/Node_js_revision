/* 
STRUCTURE DE LA BASE DE DONNÉES :
Nom de la base : ma_base
Table : personne
Colonnes :
  - mat : identifiant (ID)
  - nom : nom de la personne
  - email : adresse email
*/

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ma_base'
});

// 1. LIRE TOUT (Read All)
app.get('/tous', (req, res) => {
    db.query('SELECT * FROM personne', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

// 2. LIRE UN SEUL (Read One)
app.get('/un/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM personne WHERE mat = ?', [id], (err, results) => {
        if (err) throw err;
        res.send(results[0]);
    });
});

// 3. CRÉER (Create)
app.post('/ajouter', (req, res) => {
    const data = {
        nom: req.body.nom,
        email: req.body.email
    };
    db.query('INSERT INTO personne SET ?', data, (err, result) => {
        if (err) throw err;
        res.send("Utilisateur ajouté ! ID: " + result.insertId);
    });
});

// 4. MODIFIER (Update)
app.post('/modifier', (req, res) => {
    const id = req.body.mat;
    const nouveauNom = req.body.nom;
    db.query('UPDATE personne SET nom = ? WHERE mat = ?', [nouveauNom, id], (err, result) => {
        if (err) throw err;
        res.send("Modification réussie !");
    });
});

// 5. SUPPRIMER (Delete)
app.get('/supprimer/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM personne WHERE mat = ?', [id], (err, result) => {
        if (err) throw err;
        res.send("Utilisateur supprimé !");
    });
});

app.listen(3000, () => {
    console.log("Serveur CRUD lancé sur http://localhost:3000");
});

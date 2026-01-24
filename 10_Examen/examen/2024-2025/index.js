const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Tableaux pour stocker les données (en mémoire)
let clients = [];
let reservations = [];

// Classes (fondé sur le dossier 01)
class Voiture {
    constructor(immatriculation, marque, modele, annee, prix) {
        this.immatriculation = immatriculation;
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.prix = prix;
    }
}

class Client {
    constructor(cin, nom, prenom, adresse, ddn) {
        this.cin = cin;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.ddn = ddn;
    }
}

class Reservation {
    constructor(id, date, debut, fin, client, voiture) {
        this.id = id;
        this.date = date;
        this.debut = debut;
        this.fin = fin;
        this.client = client;
        this.voiture = voiture;
    }
}

// 1) POST : /clients/register
app.post('/clients/register', (req, res) => {
    const { cin, nom, prenom, adresse, ddn, age } = req.body;

    // Vérification de l'âge
    if (parseInt(age) < 18) {
        res.send("Le client doit avoir au moins 18 ans");
    } else {
        const nouveauClient = new Client(cin, nom, prenom, adresse, ddn);
        clients.push(nouveauClient);

        // Retourne nom et mot de passe fictif
        res.status(201).send({
            nom: nom,
            password: "pass_" + nom
        });
    }
});

// 2) POST : /reservations/
app.post('/reservations/', (req, res) => {
    // Vérification du token dans le header
    if (!req.headers['token']) {
        return res.status(401).send("Accès refusé : Token manquant");
    }

    const { id, date, debut, fin, client, voiture } = req.body;
    const nouvelleRes = new Reservation(id, date, debut, fin, client, voiture);

    reservations.push(nouvelleRes);
    res.send("Réservation ajoutée avec succès");
});

// 3) GET : /reservations/:date
app.get('/reservations/:date', (req, res) => {
    // Vérification du token dans le header
    if (!req.headers['token']) {
        return res.status(401).send("Accès refusé : Token manquant");
    }

    const laDate = req.params.date;

    // Filtrer les réservations par date
    let listeParDate = "";
    for (let r of reservations) {
        if (r.date === laDate) {
            listeParDate += `<li>Réservation ID: ${r.id} - Client: ${r.client}</li>`;
        }
    }

    // Lire le template HTML et injecter les données
    fs.readFile('./reservations.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send("Erreur de lecture du template");
        } else {
            // Remplacement simple pour simuler un template (basé sur le dossier 05/08)
            let pageHtml = data.replace('<!-- Les réservations s\'afficheront ici -->', `<ul>${listeParDate}</ul>`);
            res.send(pageHtml);
        }
    });
});

app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});

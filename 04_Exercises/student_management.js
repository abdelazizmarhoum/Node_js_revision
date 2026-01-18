// Exercice 1 : Système de Gestion des Étudiants avec prompt-sync
const prompt = require('prompt-sync')();

class Étudiant {
    constructor(id, nom, âge) {
        this.id = id;
        this.nom = nom;
        this.âge = âge;
    }

    info() {
        console.log(`ID Étudiant : ${this.id}, Nom : ${this.nom}, Âge : ${this.âge}`);
    }
}

class ÉtudiantEnLigne extends Étudiant {
    constructor(id, nom, âge, plateforme) {
        super(id, nom, âge);
        this.plateforme = plateforme;
    }

    info() {
        console.log(`ID Étudiant : ${this.id}, Nom : ${this.nom}, Âge : ${this.âge}, Plateforme : ${this.plateforme}`);
    }
}

class ÉtudiantPrésentiel extends Étudiant {
    constructor(id, nom, âge, salleDeClasse) {
        super(id, nom, âge);
        this.salleDeClasse = salleDeClasse;
    }

    info() {
        console.log(`ID Étudiant : ${this.id}, Nom : ${this.nom}, Âge : ${this.âge}, Salle de classe : ${this.salleDeClasse}`);
    }
}

// Créer des instances avec prompt-sync
console.log("=== Saisie des informations des étudiants ===");
const idEtudiant1 = prompt('Entrez l\'ID de l\'étudiant 1 : ');
const nomEtudiant1 = prompt('Entrez le nom de l\'étudiant 1 : ');
const ageEtudiant1 = prompt('Entrez l\'âge de l\'étudiant 1 : ');

const idEtudiant2 = prompt('Entrez l\'ID de l\'étudiant 2 : ');
const nomEtudiant2 = prompt('Entrez le nom de l\'étudiant 2 : ');
const ageEtudiant2 = prompt('Entrez l\'âge de l\'étudiant 2 : ');
const plateforme = prompt('Entrez la plateforme de l\'étudiant 2 : ');

const idEtudiant3 = prompt('Entrez l\'ID de l\'étudiant 3 : ');
const nomEtudiant3 = prompt('Entrez le nom de l\'étudiant 3 : ');
const ageEtudiant3 = prompt('Entrez l\'âge de l\'étudiant 3 : ');
const salle = prompt('Entrez la salle de classe de l\'étudiant 3 : ');

const étudiant1 = new Étudiant(idEtudiant1, nomEtudiant1, ageEtudiant1);
const étudiantEnLigne1 = new ÉtudiantEnLigne(idEtudiant2, nomEtudiant2, ageEtudiant2, plateforme);
const étudiantPrésentiel1 = new ÉtudiantPrésentiel(idEtudiant3, nomEtudiant3, ageEtudiant3, salle);

étudiant1.info();
étudiantEnLigne1.info();
étudiantPrésentiel1.info();

console.log("--------------------");

// Exercice 2 : Création d'un Serveur Web Simple avec Express
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('./étudiants.html', null, (err, data) => {
        if (err) {
            res.end('Erreur lors du chargement du fichier !');
        } else {
            res.end(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

// Exercice 3 : Système d'Inventaire de Produits avec prompt-sync

class Produit {
    constructor(code, nom, quantité, prix) {
        this.code = code;
        this.nom = nom;
        this.quantité = quantité;
        this.prix = prix;
    }

    info() {
        console.log(`Code : ${this.code}, Nom : ${this.nom}, Quantité : ${this.quantité}, Prix : ${this.prix}$`);
    }

    calculerValeur() {
        return this.quantité * this.prix;
    }
}

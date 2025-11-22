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

class ProduitÉlectronique extends Produit {
    constructor(code, nom, quantité, prix, périodeGarantie) {
        super(code, nom, quantité, prix);
        this.périodeGarantie = périodeGarantie;
    }

    info() {
        console.log(`Code : ${this.code}, Nom : ${this.nom}, Quantité : ${this.quantité}, Prix : ${this.prix}$, Garantie : ${this.périodeGarantie} ans`);
    }
}

class ProduitAlimentaire extends Produit {
    constructor(code, nom, quantité, prix, dateExpiration) {
        super(code, nom, quantité, prix);
        this.dateExpiration = dateExpiration;
    }

    info() {
        console.log(`Code : ${this.code}, Nom : ${this.nom}, Quantité : ${this.quantité}, Prix : ${this.prix}$, Expire le : ${this.dateExpiration}`);
    }
}

// Créer des instances avec prompt-sync
console.log("=== Saisie des informations des produits ===");
const codeProduit1 = prompt('Entrez le code du produit 1 : ');
const nomProduit1 = prompt('Entrez le nom du produit 1 : ');
const quantitéProduit1 = prompt('Entrez la quantité du produit 1 : ');
const prixProduit1 = prompt('Entrez le prix du produit 1 : ');

const codeProduit2 = prompt('Entrez le code du produit 2 : ');
const nomProduit2 = prompt('Entrez le nom du produit 2 : ');
const quantitéProduit2 = prompt('Entrez la quantité du produit 2 : ');
const prixProduit2 = prompt('Entrez le prix du produit 2 : ');
const garantie = prompt('Entrez la période de garantie du produit 2 : ');

const codeProduit3 = prompt('Entrez le code du produit 3 : ');
const nomProduit3 = prompt('Entrez le nom du produit 3 : ');
const quantitéProduit3 = prompt('Entrez la quantité du produit 3 : ');
const prixProduit3 = prompt('Entrez le prix du produit 3 : ');
const expiration = prompt('Entrez la date d\'expiration du produit 3 : ');

const produit1 = new Produit(codeProduit1, nomProduit1, quantitéProduit1, prixProduit1);
const électronique1 = new ProduitÉlectronique(codeProduit2, nomProduit2, quantitéProduit2, prixProduit2, garantie);
const alimentaire1 = new ProduitAlimentaire(codeProduit3, nomProduit3, quantitéProduit3, prixProduit3, expiration);

produit1.info();
électronique1.info();
alimentaire1.info();

console.log(`Valeur du produit : ${produit1.calculerValeur()}$`);
console.log(`Valeur de l'électronique : ${électronique1.calculerValeur()}$`);
console.log(`Valeur des produits alimentaires : ${alimentaire1.calculerValeur()}$`);

const valeurTotaleInventaire = produit1.calculerValeur() + électronique1.calculerValeur() + alimentaire1.calculerValeur();
console.log(`Valeur totale de l'inventaire : ${valeurTotaleInventaire}$`);

// Exercice 4 : Manipulation de Boucles avec for et while

console.log("=== Exercice sur les boucles ===");

// Boucle for pour afficher les nombres de 1 à 10
console.log("Nombres de 1 à 10 (boucle for) : ");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Boucle while pour calculer la somme des nombres de 1 à N
const n = parseInt(prompt('Entrez un nombre pour calculer la somme de 1 à N : '));
let somme = 0;
let compteur = 1;
while (compteur <= n) {
    somme += compteur;
    compteur++;
}
console.log(`La somme des nombres de 1 à ${n} est : ${somme}`);

// Boucle for pour afficher la table de multiplication
const nombre = parseInt(prompt('Entrez un nombre pour afficher sa table de multiplication : '));
console.log(`Table de multiplication de ${nombre} : `);
for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// Boucle while pour afficher les nombres pairs de 2 à 20
console.log("Nombres pairs de 2 à 20 (boucle while) : ");
let nombrePair = 2;
while (nombrePair <= 20) {
    console.log(nombrePair);
    nombrePair += 2;
}
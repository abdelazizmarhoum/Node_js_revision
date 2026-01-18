const Produit = require('./produit.js');

// Utilisation de la classe exportée
let p1 = new Produit(101, "Ordinateur");
p1.afficher();

let p2 = new Produit(0, "");
p2.saisir();
p2.afficher();

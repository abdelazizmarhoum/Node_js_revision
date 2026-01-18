class Enseignant {
    constructor(nom, prenom, heures) {
        this.nom = nom;
        this.prenom = prenom;
        this.heures = heures;
    }

    calculerSalaire() {
        return 0; // Sera défini dans les sous-classes
    }
}

class Chercheur extends Enseignant {
    constructor(nom, prenom, heures, salaireBase, prime) {
        super(nom, prenom, heures);
        this.salaireBase = salaireBase;
        this.prime = prime;
    }

    calculerSalaire() {
        return this.salaireBase + this.prime;
    }
}

class Vacataire extends Enseignant {
    constructor(nom, prenom, heures, tauxHoraire) {
        super(nom, prenom, heures);
        this.tauxHoraire = tauxHoraire;
    }

    calculerSalaire() {
        return this.heures * this.tauxHoraire;
    }
}

// Exemple d'utilisation
const e1 = new Chercheur("Dupont", "Jean", 192, 3000, 500);
const v1 = new Vacataire("Martin", "Marie", 50, 40);

console.log(e1.nom + " coûte : " + e1.calculerSalaire());
console.log(v1.nom + " coûte : " + v1.calculerSalaire());

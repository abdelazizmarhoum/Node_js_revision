class Enseignant {
    constructor(nom, prenom, heures) {
        this.nom = nom;
        this.prenom = prenom;
        this.heures = heures;
    }

    coutEcole(salaireNet) {
        const charges = salaireNet * 0.2;
        return salaireNet + charges;
    }
}

class EnseignantChercheur extends Enseignant {
    constructor(nom, prenom, heures, salaireBase, prime) {
        super(nom, prenom, heures);
        this.salaireBase = salaireBase;
        this.prime = prime;
    }

    salaireNet() {
        return this.salaireBase + this.prime;
    }
}

class Vacataire extends Enseignant {
    constructor(nom, prenom, heures, tauxHoraire) {
        super(nom, prenom, heures);
        this.tauxHoraire = tauxHoraire;
    }

    salaireNet() {
        return this.heures * this.tauxHoraire;
    }
}

const e1 = new EnseignantChercheur("Karim", "Bennani", 200, 12000, 3000);
const e2 = new Vacataire("Sara", "Ali", 100, 150);

console.log("Chercheur coût école :", e1.coutEcole(e1.salaireNet()));
console.log("Vacataire coût école :", e2.coutEcole(e2.salaireNet()));

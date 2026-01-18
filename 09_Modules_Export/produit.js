const prompt = require('prompt-sync')();

class Produit {
    constructor(code, des) {
        this.code = code;
        this.des = des;
    }

    saisir() {
        this.code = parseInt(prompt("code : "));
        this.des = prompt("designation : ");
    }

    afficher() {
        console.log(`code : ${this.code} , designation : ${this.des}`);
    }
}

module.exports = Produit;

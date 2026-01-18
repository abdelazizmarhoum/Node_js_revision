# 🚀 Révision Node.js & Express

Ce dépôt contient l'essentiel pour réviser Node.js, Express et MySQL avec une syntaxe simple et directe.

---

## 1. Initialisation d'un Projet
Pour commencer un projet Node.js :
1. `mkdir mon_projet` (Créer le dossier)
2. `cd mon_projet` (Entrer dans le dossier)
3. `npm init -y` (Initialiser le fichier `package.json`)
4. `npm install express body-parser mysql prompt-sync` (Installer les outils)

---

## 2. Syntaxe de Base (JavaScript)

### Variables
- `let` : Variable qui peut changer.
- `const` : Valeur fixe qui ne change pas.

### Conditions
```javascript
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}
```

### Boucles
```javascript
// Boucle For
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Boucle While
while (condition) {
    // code
}
```

---

## 3. Programmation Orientée Objet (OOP)
```javascript
class Produit {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }

    afficher() {
        console.log(this.nom + " coûte " + this.prix);
    }
}

// Héritage
class Electronique extends Produit { }
```

---

## 4. Système de Fichiers (Module FS)
```javascript
const fs = require('fs');

// Lire un fichier
fs.readFile('data.txt', 'utf8', (err, data) => {
    console.log(data);
});

// Écrire un fichier
fs.writeFile('data.txt', 'Bonjour', (err) => {
    if (err) throw err;
});
```

---

## 5. Serveur Web avec Express

### Configuration Simple
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bonjour le monde');
});

app.listen(3000);
```

### Body-Parser (Formulaires)
```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const user = req.body.nom;
    res.send("Bienvenue " + user);
});
```

### Paramètres d'URL
```javascript
app.get('/user/:id', (req, res) => {
    const id = req.params.id; // Récupère l'ID depuis l'URL
    res.send("Utilisateur ID: " + id);
});
```

---

## 6. Base de Données (MySQL)
```javascript
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ma_base'
});

// Requête Simple
db.query('SELECT * FROM personne', (err, results) => {
    console.log(results);
});

// Requête Paramétrée (Sécurité)
db.query('SELECT * FROM personne WHERE mat = ?', [id], (err, result) => {
    // ...
});
```

---

## 7. Modules (Export / Import)
- **Export** : `module.exports = MaClasse;`
- **Import** : `const MaClasse = require('./mon_fichier.js');`

---

## 📂 Structure du Dépôt
- `00-02` : Bases de Node.js, OOP et Fichiers.
- `03-05` : Express et gestion des formulaires.
- `06-08` : MySQL et Opérations CRUD.
- `09` : Organisation du code en modules.

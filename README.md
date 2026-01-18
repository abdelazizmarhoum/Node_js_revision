# 🚀 Révision Node.js & Express - Guide Complet

Ce guide récapitule les points essentiels pour l'examen, en utilisant une syntaxe simplifiée.

---

## 1. Configuration du Projet
- `npm init -y` : Créer le fichier `package.json`.
- `npm install express body-parser mysql prompt-sync` : Installer les dépendances.
- `node index.js` : Lancer votre application.

---

## 2. Bases du JavaScript

### Variables & Types
- `let` : Variable modifiable.
- `const` : Constante non modifiable.
- `parseInt()` / `parseFloat()` : Convertir du texte en nombre.

### Boucles & Logique
- **For** : `for (let i = 0; i < tab.length; i++) { ... }`
- **While** : `while (condition) { ... }`
- **If/Else** : `if (age < 18) { ... } else { ... }`

---

## 3. Programmation Orientée Objet (OOP)
On utilise les classes pour organiser les données et les calculs.

```javascript
class Enseignant {
    constructor(nom, heures, taux) {
        this.nom = nom;
        this.heures = heures;
        this.taux = taux;
    }

    // Méthode de calcul
    calculerSalaire() {
        return this.heures * this.taux;
    }
}

// Héritage
class Chercheur extends Enseignant {
    constructor(nom, heures, taux, prime) {
        super(nom, heures, taux);
        this.prime = prime;
    }
    
    // Surcharge de méthode
    calculerSalaire() {
        return super.calculerSalaire() + this.prime;
    }
}
```

---

## 4. Système de Fichiers (Module FS)
Utile pour lire des fichiers texte ou des templates HTML.

```javascript
const fs = require('fs');

// Lecture asynchrone
fs.readFile('page.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

---

## 5. Web & Express Framework

### Routes & Paramètres
- **GET** : Récupérer des données.
- **POST** : Envoyer des données (formulaire).
- **Paramètres** : `app.get('/user/:id', ...)` -> accessed via `req.params.id`.

### Headers & Tokens (Examen)
Certains examens demandent de vérifier un token dans les headers.
```javascript
app.get('/prive', (req, res) => {
    const token = req.headers['token'];
    if (!token) {
        res.status(401).send("Accès refusé");
    } else {
        res.send("Bienvenue");
    }
});
```

### Codes d'état HTTP (Status Codes)
- `200` : OK (Succès).
- `201` : Created (Création réussie).
- `401` : Unauthorized (Non autorisé).
- `404` : Not Found (Page non trouvée).
- `500` : Internal Server Error.

---

## 6. Body-Parser & Formulaires
Indispensable pour récupérer `req.body` dans une route **POST**.

```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calcul', (req, res) => {
    const v1 = parseInt(req.body.v1);
    res.send("Valeur : " + v1);
});
```

---

## 7. Base de Données (MySQL)
```javascript
const mysql = require('mysql');
const db = mysql.createConnection({ ... });

// INSERT avec objet
db.query('INSERT INTO table SET ?', { nom: 'Aziz', age: 25 }, callback);

// SELECT avec paramètre
db.query('SELECT * FROM table WHERE id = ?', [id], (err, results) => {
    res.send(results[0]);
});
```

---

## 8. Modules (Export / Import)
- **Export** : `module.exports = MaClasse;`
- **Import** : `const MaClasse = require('./mon_fichier.js');`

---

## 📂 Structure du Dépôt
- `00-02` : Bases & OOP.
- `03-05` : Serveur Web & Formulaires.
- `06-08` : MySQL & CRUD.
- `09` : Modularité.
- `10_Examen` : **Annales et solutions d'examens réels.**

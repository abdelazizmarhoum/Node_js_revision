const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser les données des formulaires
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Données fictives
let users = [
    { id: 1, nom: 'Jean Dupont', email: 'jean@email.com' },
    { id: 2, nom: 'Marie Martin', email: 'marie@email.com' }
];

// Route racine
app.get('/', (req, res) => {
    res.send('Gestion des Utilisateurs');
});

// GET tous les utilisateurs
app.get('/users', (req, res) => {
    res.send(users);
});

// GET un utilisateur spécifique (Route avec paramètre :id)
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let userFound = null;

    for (let u of users) {
        if (u.id === id) {
            userFound = u;
        }
    }

    if (!userFound) {
        return res.status(404).send('Utilisateur non trouvé');
    }

    res.send(userFound);
});

// POST - Créer un utilisateur (via formulaire)
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        nom: req.body.nom,
        email: req.body.email
    };

    users.push(newUser);
    res.send('Utilisateur ajouté !');
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});

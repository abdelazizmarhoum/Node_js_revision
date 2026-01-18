const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ma_base'
});

app.get('/utilisateurs', (req, res) => {
    db.query('SELECT * FROM personne', (err, results) => {
        res.send(results);
    });
});

app.listen(3000);

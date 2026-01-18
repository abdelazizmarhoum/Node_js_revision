const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<form method="post" action="/somme"><input name="v1"><input name="v2"><button>Calculer</button></form>');
});

app.post('/somme', (req, res) => {
    let v1 = parseInt(req.body.v1);
    let v2 = parseInt(req.body.v2);
    res.send("La somme est : " + (v1 + v2));
});

app.listen(3000);

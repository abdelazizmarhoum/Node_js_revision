const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server et demarre sur le port ${port}`);
});


// exemple de lire un fichier
// il lit le fichier index.html et affiche son contenu

app.get('/', (req, res) => {
  fs.readFile('./index.html', null, (err, data) => {
    if (err) {
      res.end('Error !');
    } else {
      res.end(data);
    }
  });
});


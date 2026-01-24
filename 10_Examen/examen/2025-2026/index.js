const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const insert = require("./insert");
const liste = require("./liste");
const modi = require("./modi");
const supp = require("./supp");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  fs.readFile("produits.html", "utf8", (err, data) => {
    if (err) {
      res.send("Error loading file");
    } else {
      res.send(data);
    }
  });
});

app.post("/produit", insert);
app.get("/produits", liste);
app.put("/produit/:CodeProduit", modi);
app.delete("/produit/:CodeProduit", supp);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

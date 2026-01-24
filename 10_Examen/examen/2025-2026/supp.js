const con = require("./db");

module.exports = (req, res) => {
  const { CodeProduit } = req.params;

  const sql = "DELETE FROM produits WHERE CodeProduit = ?";

  con.query(sql, [CodeProduit], (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Produit supprimé");
    }
  });
};

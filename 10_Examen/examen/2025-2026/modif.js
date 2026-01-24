const con = require("./db");

module.exports = (req, res) => {
  const { CodeProduit } = req.params;
  const { CodeDepot, lib, qlei, qlee, qtes, prix } = req.body;

  if (!(parseInt(CodeDepot) == 1 || parseInt(CodeDepot) == 2 || parseInt(CodeDepot) == 3)) {
    res.send("CodeDepot must be 1, 2 or 3");
  }

  const sql = "UPDATE produits SET CodeDepot = ?, lib = ?, qlei = ?, qlee = ?, qtes = ?, prix = ? WHERE CodeProduit = ?"

  con.query(
    sql,[CodeDepot, lib, qlei, qlee, qtes, prix, CodeProduit],(err) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Produit modifié");
      }
    }
  );
};

const con = require("./db");

module.exports = (req, res) => {
  const { CodeProduit, CodeDepot, lib, qlei, qlee, qtes, prix } = req.body;
  if (!(parseInt(CodeDepot) == 1 || parseInt(CodeDepot) == 2 || parseInt(CodeDepot) == 3)){
    res.send("CodeDepot must be 1, 2 or 3");
  } else {
    const sql = " INSERT INTO produits VALUES (?, ?, ?, ?, ?, ?, ?)";
    con.query(sql,[CodeProduit, CodeDepot, lib, qlei, qlee, qtes, prix],(err) => {
        if(err){
            res.send(err)
        } else {
           res.send("Produit inséré"); 
        } 
      },
    );
  }
};

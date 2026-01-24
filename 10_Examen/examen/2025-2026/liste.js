const con = require("./db");

module.exports = (req, res) => {
  const sql = "SELECT * FROM produits";

  con.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};

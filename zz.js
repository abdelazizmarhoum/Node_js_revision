const express = require("express");
const Port = process.env.Port || 4000;
const app = express();
const fs = require("fs");

app.get('/', (req, res) => {
    fs.readFile("./home.html", null, (err, data) => {
        if (err) {
            res.end("File not found!");
        } else {
            res.end(data);
        }
    });
});

app.listen(Port, () => {
    console.log("démarrage de", Port);
});
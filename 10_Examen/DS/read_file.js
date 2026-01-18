const fs = require('fs');

console.log("reading file, please wait...");

// On suppose qu'un fichier 'test.txt' existe
fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Erreur lors de la lecture du fichier");
    } else {
        console.log(data);
    }
});

const fs = require("fs");

console.log("reading file, please wait...");

fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) {
        console.log("File not found!");
    } else {
        console.log(data);
    }
});

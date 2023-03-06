const fs = require("fs");
const path = require("path");

fs.writeFileSync("homework.txt", "Homework 02 in Basic Node");

let pathToSave = path.join(__dirname, "homework.txt");
console.log(pathToSave);

fs.appendFileSync("homework.txt", "\nFinished!");


let content = fs.readFileSync(pathToSave, {encoding: "utf-8"});
console.log(content);

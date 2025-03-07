const express = require("express")
const app = express();
const port = 8080;
const fs = require("fs");

const path = JSON.parse(fs.readFileSync("./data/tours-simple.json"));
app.get("/tours", (req, res) => {
    res.status(200).json(path);
})



















app.listen(port, () => {
    console.log("App running in port " + port)
})
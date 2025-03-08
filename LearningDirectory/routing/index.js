const express = require("express")
const app = express();
const port = 8080;
const fs = require("fs");

app.use(express.json()); 

const path = JSON.parse(fs.readFileSync("./data/tours-simple.json"));

const getAllTours = (req, res) =>{
    res.send(path)
}

const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = path.find(e => e.id === id);
    res.json(tour);
}

const UpdateTour = (req, res) => {
    res.send("Update")
    
}

const deleteTour = (req, res) => {
    res.send("Deleted")
    
}

const postTour = (req, res) => {
    const newTour = {
        id: path.length + 1,
        name: req.body.name,
    }
    path.push(newTour);

    fs.writeFile("./data/tours-simple.json", JSON.stringify(path), err => {
        res.status(201).json(path)
    })
    res.send("Added");
}


app.route("/tours").get(getAllTours).post(postTour);
app.route("/tours/:id").get(getTour).patch(UpdateTour).delete(deleteTour);

app.listen(port, () => {
    console.log("App running in port " + port)
})
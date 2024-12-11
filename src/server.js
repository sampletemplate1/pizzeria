const mongodb = require("mongodb").MongoClient;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());


app.get("/pizzaordering", (req, res) => {
  mongodb.connect("mongodb://localhost:27017", (err, result) => {
    if (err) throw err;
    const db = result.db("Pizzeria");
    console.log("Hi");
    const collection1 = db.collection("pizza");
    collection1.find({}).toArray((err, docs) => {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
});

app.get("/ingredientsdata", (req, res) => {
  mongodb.connect("mongodb://localhost:27017",(err, result) => {
    if (err) throw err;
    const db = result.db("Pizzeria");
    const collection2 = db.collection("ingredients");
    collection2.find({}).toArray((err, docs) => {
      if (err) {
        throw err;
      }
      res.send(docs);
    });
  });
});
app.listen(4000, () => console.log("It is running"));
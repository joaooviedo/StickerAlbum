const express = require("express");
const cors = require("cors");

const app = express();

const controller = require("./controllers/figurinhas.controller")

app.use(cors());
app.use(express.json())

app.get("/figurinhas", controller.findAllFigurinhasController)
app.get("/figurinhas/figurinha/:id", controller.findFigurinhaByIDController)
app.post("/figurinhas/figurinha/create", controller.createFigurinhaController)
app.put("/figurinhas/figurinha/update", controller.updateFigurinhaController)
app.delete("/figurinhas/figurinha/delete/:id", controller.deleteFigurinhaController)

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
const express = require("express");
const app = express();

const cors = require("cors");

const Carrer = require("./entities/carrer.entity");
const port = 3000;

let figurinhas = require("./mocks/figurinhas");

app.get("/", (req, res) => {
  res.send(figurinhas);
});

app.get("/figurinha/:id", function (req, res) {
});

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`);
});

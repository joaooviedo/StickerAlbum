const express = require("express");
const cors = require("cors");
const Carrer = require("./entities/carrer.entity");
const app = express();
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

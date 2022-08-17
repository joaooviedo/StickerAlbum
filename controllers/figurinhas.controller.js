const figurinhaService = require("../services/figurinhas.service");

function findAllFigurinhasController(req, res) {
  const allFigurinhas = figurinhaService.findAllFigurinhasService();
  res.send(allFigurinhas);
}

function findFigurinhaByIDController(req, res) {
  const id = req.params.id;
  const uniqueFigurinha = figurinhaService.findFigurinhaByIDService(id);
  res.send(uniqueFigurinha);
}

function createFigurinhaController(req, res) {
  const figurinha = req.body;
  const figurinhaCreated = figurinhaService.createFigurinhaService(figurinha);
  res.send(figurinhaCreated);
}

function updateFigurinhaController(req, res) {
  const figurinha = req.body;
  const figurinhaUpdated = figurinhaService.updateFigurinhaService(figurinha);
  res.send(figurinhaUpdated);
}

function deleteFigurinhaController(req, res) {
  const id = req.params.id;
  const figurinhaDeleted = figurinhaService.deleteFigurinhaService(id);
  res.send(figurinhaDeleted);
}

module.exports = {
    findAllFigurinhasController,
    findFigurinhaByIDController,
    createFigurinhaController,
    updateFigurinhaController,
    deleteFigurinhaController,
}
const figurinhaService = require("../services/figurinhas.service");

function findAllFigurinhasController(req, res) {
  try{
    const allFigurinhas = figurinhaService.findAllFigurinhasService();
    res.status(200).send(allFigurinhas);
  } catch (err) {
    console.log(err)
    res.status(500)
  }
}

function findFigurinhaByIDController(req, res) {
  const id = req.params.id;
  const uniqueFigurinha = figurinhaService.findFigurinhaByIDService(id);
  if (uniqueFigurinha) {
    res.status(200).send(uniqueFigurinha);
  } else {
    res.status(400).send({message: "Não existe nenhuma figurinha com esse Id."})
  }
}

function createFigurinhaController(req, res) {
  try {
    const figurinha = req.body;
    const figurinhaCreated = figurinhaService.createFigurinhaService(figurinha);
    res.status(201).send(figurinhaCreated);
  } catch (err) {
    console.log(err.message)
    res.status(400).send({message: err.message})
  }

}

function updateFigurinhaController(req, res) {
  try {
    const figurinha = req.body;
    const figurinhaUpdated = figurinhaService.updateFigurinhaService(figurinha);
    res.status(200).send(figurinhaUpdated);
  } catch (err) {
    res.status(400).send({message: err.message})
  }
}

function deleteFigurinhaController(req, res) {
  const id = req.params.id;
  const figurinhaDeleted = figurinhaService.deleteFigurinhaService(id);
  if (figurinhaDeleted) {
    res.status(200).send(figurinhaDeleted);
  } else {
    res.status(400).send({message: "Nenhuma figurinha com esse Id foi encontrada."})
  }
  res.send(figurinhaDeleted);
}

module.exports = {
    findAllFigurinhasController,
    findFigurinhaByIDController,
    createFigurinhaController,
    updateFigurinhaController,
    deleteFigurinhaController,
}
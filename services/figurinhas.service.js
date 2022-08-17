const figurinhas = require("../mocks/figurinhas");
const FigurinhaEntity = require("../entities/figurinha.entity");
const CarrerEntity = require("../entities/carrer.entity");

//Achar todas
function findAllFigurinhasService() {
  return figurinhas;
}

//Achar por ID
function findFigurinhaByIDService(id) {
  let figurinhaFinded;
  figurinhas.map((figurinha) => {
    if (figurinha.id === id) {
      figurinhaFinded = figurinha;
    }
  });
  return figurinhaId;
}

//Criar Figurinha
function createFigurinhaService(figurinha) {
  const newFigurinha = new FigurinhaEntity(figurinha);
  newFigurinha.validate();
  if (!figurinha.carrer) {
    throw new Error("A carreira precisa ser informada");
  }
  const newCarrers = [];
  figurinha.carrer.map((carrer) => {
    const newCarrer = new CarrerEntity(carrer);
    newCarrer.validate();
    newCarrers.push(newCarrer.getCarrer());
  });

  const newFigurinhaValidated = {
    ...newFigurinha.getFigurinha(),
    carrer: newCarrers,
  };
  figurinhas.push(newFigurinhaValidated);
  return newFigurinhaValidated;
}

//Atualizar Figurinha
function updateFigurinhaService(figurinha) {
  const updateFigurinha = new FigurinhaEntity(figurinha);
  updateFigurinha.validate();
  if (!figurinha.carrer) {
    throw new Error("A carreira precisa ser informada");
  }
  const updatedCarrers = [];
  figurinha.carrer.map((carrer) => {
    const updateCarrer = new CarrerEntity(carrer);
    updateCarrer.validate();
    updatedCarrers.push(updateCarrer.getCarrer());
  });
  const updatedFigurinha = {
    ...updateFigurinha.getFigurinha(),
    carrer: updatedCarrers,
  };

  figurinhas.map((eachFigurinha, index) => {
    if (eachFigurinha.id === updateFigurinha) {
      figurinhas.splice(index, 1, updateFigurinha);
    }
  });
  return updatedFigurinha;
}

//Deletar Figurinha
function deleteFigurinhaService(id) {
  let figurinhaFinded;
  figurinhas.map((figurinha, index) => {
    if (figurinha.id === id) {
      figurinhas.splice(index, 1);
    }
  });
  return figurinhaFinded;
}

module.exports = {
  findAllFigurinhasService,
  findFigurinhaByIDService,
  createFigurinhaService,
  updateFigurinhaService,
  deleteFigurinhaService,
}
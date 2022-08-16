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
    console.log(figurinha)
  const newFigurinha = new FigurinhaEntity(figurinha);
  newFigurinha.validate();
  if (!figurinha.carrer){
    throw new Error("A carreira precisa ser informada")
  }
  figurinha.carrer.map((carrer) => {
    const newCarrer = new CarrerEntity(carrer);
    newCarrer.validate();
  });
}

createFigurinhaService({
    name: "Mbappe",
    country: "França",
    position: "Atacante",
    number: 7,
    age: 22,
    carrer: [
      {
        originTeam: "Monaco",
        actualTeam: "Paris Saint German",
        goals: 444,
        assists: 226,
      },
    ],
  }
)

const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000

let figurinhas = require("./mocks/figurinhas")

app.use(cors({
  origin: []
}))

app.get('/', (req, res) => {
  res.send(figurinhas)
})

app.get("/figurinha/:id", function (req, res) {
  const figurinhaId = req.params.id
  let figurinhaFinded
  figurinhas.map((figurinha) => {
    if(figurinha.id === figurinhaId){
      figurinhaFinded = figurinha
    }
  })
  if (figurinhaFinded){
    res.send(figurinhaFinded)
  } else {
    res.send("Nenhuma Figurinha com esse ID foi encontrada")
  }
})


app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
})
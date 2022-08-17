const router = require("express").Router();

const controller = require("../controllers/figurinhas.controller");

router.get("/figurinhas", controller.findAllFigurinhasController);
router.get("/figurinhas/figurinha/:id", controller.findFigurinhaByIDController);
router.post("/figurinhas/figurinha/create", controller.createFigurinhaController);
router.put("/figurinhas/figurinha/update", controller.updateFigurinhaController);
router.delete("/figurinhas/figurinha/delete/:id", controller.deleteFigurinhaController);

module.exports = router;

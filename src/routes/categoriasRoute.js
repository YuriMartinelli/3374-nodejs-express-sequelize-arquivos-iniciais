const { Router } = require("express");
const CategoriaController = require("../controllers/CategoriaController")

const categoriaController = new CategoriaController();

const categoriaRouter = Router();

categoriaRouter.get("/categorias", (req, res) => categoriaController.getAll(req, res));
categoriaRouter.get("/categorias/:id", (req, res) => categoriaController.pegaUmPorId(req, res));
categoriaRouter.post("/categorias", (req, res) => categoriaController.criaNovo(req, res));
categoriaRouter.put("/categorias/:id", (req, res) => categoriaController.atualiza(req, res));
categoriaRouter.delete("/categorias", (req, res) => categoriaController.exciui(req, res));

module.exports = categoriaRouter;

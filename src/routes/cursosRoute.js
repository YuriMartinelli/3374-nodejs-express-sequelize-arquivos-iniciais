const { Router } = require("express");
const CursoController = require("../controllers/CursoController.js");

const cursoController = new CursoController();

const cursoRouter = Router();

cursoRouter.get("/cursos", (req, res) => cursoController.getAll(req, res));
cursoRouter.get("/cursos/:id", (req, res) => cursoController.pegaUmPorId(req, res));
cursoRouter.post("/cursos", (req, res) => cursoController.criaNovo(req, res));
cursoRouter.put("/cursos/:id", (req, res) => cursoController.atualiza(req, res));
cursoRouter.delete("/cursos", (req, res) => cursoController.exciui(req, res));

module.exports = cursoRouter;

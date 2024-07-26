const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const pessoaRouter = Router();

pessoaRouter.get("/pessoas", (req, res) => pessoaController.getAll(req, res));
pessoaRouter.get("/pessoas/:id", (req, res) =>
  pessoaController.pegaUmPorId(req, res)
);
pessoaRouter.post("/pessoas", (req, res) =>
  pessoaController.criaNovo(req, res)
);
pessoaRouter.put("/pessoas/:id", (req, res) =>
  pessoaController.atualiza(req, res)
);
pessoaRouter.delete("/pessoas", (req, res) =>
  pessoaController.exciui(req, res)
);
pessoaRouter.post("/pessoas/:estudanteId/matriculas", (req, res) =>
  matriculaController.criaNovo(req, res)
);

module.exports = pessoaRouter;

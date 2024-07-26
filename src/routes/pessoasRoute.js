const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");
const MatriculaController = require("../controllers/MatriculaController.js");

const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

const pessoaRouter = Router();

pessoaRouter.get("/pessoas", (req, res) => pessoaController.getAll(req, res));

pessoaRouter.get("/pessoas/todos", (req, res) =>
  pessoaController.pegaTodasPessoas(req, res)
);

pessoaRouter.get("/pessoas/:id", (req, res) =>
  pessoaController.pegaUmPorId(req, res)
);
pessoaRouter.post("/pessoas", (req, res) =>
  pessoaController.criaNovo(req, res)
);
pessoaRouter.put("/pessoas/:id", (req, res) =>
  pessoaController.atualiza(req, res)
);
pessoaRouter.delete("/pessoas/:id", (req, res) =>
  pessoaController.exclui(req, res)
);

pessoaRouter.get("/pessoas/:estudante_id/matriculas/todos", (req, res) =>
  pessoaController.pegaTodasMatriculas(req, res)
);
pessoaRouter.get("/pessoas/:estudante_id/matriculas", (req, res) =>
  pessoaController.pegaMatriculasAtivas(req, res)
);

pessoaRouter.get("/pessoas/:estudante_id/matriculas/:id", (req, res) =>
  matriculaController.pegaUm(req, res)
);

pessoaRouter.post("/pessoas/:estudante_id/matriculas", (req, res) =>
  matriculaController.criaNovo(req, res)
);

pessoaRouter.put("/pessoas/:estudante_id/matriculas/:id", (req, res) =>
  matriculaController.atualiza(req, res)
);

pessoaRouter.delete("/pessoas/:estudante_id/matriculas/:id", (req, res) =>
  matriculaController.exclui(req, res)
);

module.exports = pessoaRouter;

const Controller = require("./Controller.js");
const CursoService = require("../services/CursoService.js")

const cursoServices = new CursoService();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }
}

module.exports = CursoController;

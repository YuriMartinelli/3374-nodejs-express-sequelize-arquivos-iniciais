const { Op } = require("sequelize");
const Controller = require("./Controller.js");
const CursoService = require("../services/CursoService.js");

const cursoServices = new CursoService();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};

    data_inicial || data_final ? (where.data_inicio = {}) : null;

    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null;

    data_final ? (where.data_inicio[Op.lte] = data_final) : null;

    try {
      const listaCursos = await cursoServices.getAll(where);
      return res.status(200).json(listaCursos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }
}

module.exports = CursoController;

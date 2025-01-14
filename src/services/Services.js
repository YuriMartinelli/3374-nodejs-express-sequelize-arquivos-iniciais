const dataSource = require("../database/models");

class Services {
  constructor(nomeModel) {
    this.model = nomeModel;
  }

  async getAll(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } });
  }

  async pegaRegistrosScope(scope) {
    return dataSource[this.model].scope(scope).findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async pegaUmRegistro(where) {
    return dataSource[this.model].findOne({ where: { ...where } });
  }

  async pegaEContraRegistros(options) {
    return dataSource[this.model].findAndCountAll({ ...options });
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, where) {
    const listaRegistroAtualizado = dataSource[this.model].update(
      dadosAtualizados,
      { where: { ...where } }
    );
    if (listaRegistroAtualizado[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;

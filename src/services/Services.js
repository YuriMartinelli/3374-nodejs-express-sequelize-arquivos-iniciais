const dataSource = require("../database/models");

class Services {
  constructor(nomeModel) {
    this.model = nomeModel;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadosDoRegistro) {
    return dataSource[this.model].create(dadosDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaRegistroAtualizado = dataSource[this.model].update(
      dadosAtualizados,
      { where: { id: id } }
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

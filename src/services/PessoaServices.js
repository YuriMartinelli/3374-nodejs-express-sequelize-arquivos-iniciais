const Services = require("./Services.js");

class PessoaServices extends Services {
  constructor() {
    super("Pessoa");
  }

  async pegaMatriculasAtivasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    const listaMatriculas = await estudante.getAulasMatriculadas();

    return listaMatriculas;
  }

  async pegaTodasMatriculasPorEstudante(id) {
    const estudante = await super.pegaUmRegistroPorId(id);

    const listaMatriculas = await estudante.getTodasAsMatriculas();

    return listaMatriculas;
  }

  async pegaPessoasEscopoTodos() {
    const listaPessoas = await super.pegaRegistrosScope("todosOsRegistros");

    return listaPessoas;
  }
}

module.exports = PessoaServices;

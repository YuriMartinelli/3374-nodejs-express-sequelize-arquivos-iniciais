const convertIds = require("../utils/conversorDeStringHelper.js");
class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaRegistros = await this.entidadeService.getAll();

      return res.status(200).json(listaRegistros);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaUmPorId(req, res) {
    const { id } = req.params;
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistroPorId(
        Number(id)
      );
      return res.status(200).json(umRegistro);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async pegaUm(req, res) {
    const { ...params } = req.params;
    const where = convertIds(params);
    try {
      const umRegistro = await this.entidadeService.pegaUmRegistro(where);
      return res.status(200).json(umRegistro);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async criaNovo(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistroCriado = await this.entidadeService.criaRegistro(
        dadosParaCriacao
      );
      return res.status(200).json(novoRegistroCriado);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  }

  async atualiza(req, res) {
    const { ...params } = req.params;
    const dadosAtualizados = req.body;
    const where = convertIds(params);
    try {
      const foiAtualizado = await this.entidadeService.atualizaRegistro(
        dadosAtualizados,
        where
      );
      if (!foiAtualizado) {
        return res
          .status(400)
          .json({ mensagem: `Nnehum registro foi atualizado` });
      }
      return res.status(200).json({ mensagem: "Atualizado com sucesso!" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async exclui(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.excluiRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;

const database = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class TurmaController {
  static async list(req, res) {
    const { data_inicial, data_final } = req.query;
    const where = {};
    data_inicial || data_final ? (where.data_inicio_tur = {}) : null;
    data_inicial ? (where.data_inicio_tur[Op.gte] = data_inicial) : null;
    data_final ? (where.data_inicio_tur[Op.lte] = data_final) : null;
    try {
      const turmas = await database.Turmas.findAll({ where });
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // {
  //   where: {
  //     data_inicio_tur: {
  //       [Op.gte]: data,
  //       [Op.lte]: data,
  //     }
  //   }
  // }

  static async listById(req, res) {
    const { id } = req.params;
    try {
      const turma = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async register(req, res) {
    const novaTurma = req.body;
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    const novaTurma = req.body;
    try {
      await database.Turmas.update(novaTurma, { where: { id: Number(id) } });
      const turmaAtualizada = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(turmaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async delete(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ message: `Turma com o id ${id} excluído com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restore(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.restore({ where: { id: Number(id) } });
      return res
        .status(200)
        .json({ message: `Turma com o id ${id} restaurado com sucesso` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = TurmaController;

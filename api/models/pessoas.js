"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id",
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
      });
    }
  }
  Pessoas.init(
    {
      nome_pes: DataTypes.STRING,
      ativo_pes: DataTypes.BOOLEAN,
      email_pes: DataTypes.STRING,
      role_pes: DataTypes.STRING,
    },
    {
      paranoid: true,
      sequelize,
      modelName: "Pessoas",
    }
  );
  return Pessoas;
};

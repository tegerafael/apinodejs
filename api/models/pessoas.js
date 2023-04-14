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
      nome_pes: {
        type: DataTypes.STRING,
        validate: {
          funcaoValidate: function (dado) {
            if (dado.length < 3) {
              throw new Error("O campo nome deve ter mais de 3 caracteres");
            }
          },
        },
      },
      ativo_pes: DataTypes.BOOLEAN,
      email_pes: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "dado do tipo e-mail inválido",
          },
        },
      },
      role_pes: DataTypes.STRING,
    },
    {
      paranoid: true,
      defaultScope: {
        where: {
          ativo_pes: true,
        },
      },
      scopes: {
        todos: { where: {} },
      },
      sequelize,
      modelName: "Pessoas",
    }
  );
  return Pessoas;
};

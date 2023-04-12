"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome_pes: "Ana Souza",
          ativo_pes: true,
          email_pes: "ana@gmail.com",
          role_pes: "Estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Marcos Cintra",
          ativo_pes: true,
          email_pes: "marcos@gmail.com",
          role_pes: "Estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Alexandra de Oliveira Carvalho",
          ativo_pes: true,
          email_pes: "alexandra@gmail.com",
          role_pes: "Estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Vanderlei Silva",
          ativo_pes: true,
          email_pes: "vanderlei@gmail.com",
          role_pes: "Docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Rosa de Oliveira",
          ativo_pes: false,
          email_pes: "rosa@gmail.com",
          role_pes: "Docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pessoas", null, {});
  },
};

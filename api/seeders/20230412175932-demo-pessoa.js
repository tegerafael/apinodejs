module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pessoas",
      [
        {
          nome_pes: "Ana Souza",
          ativo_pes: true,
          email_pes: "ana@ana.com",
          role_pes: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Marcos Cintra",
          ativo_pes: true,
          email_pes: "marcos@marcos.com",
          role_pes: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Felipe Cardoso",
          ativo_pes: true,
          email_pes: "felipe@felipe.com",
          role_pes: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Sandra Gomes",
          ativo_pes: false,
          email_pes: "sandra@sandra.com",
          role_pes: "estudante",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Paula Morais",
          ativo_pes: true,
          email_pes: "paula@paula.com",
          role_pes: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome_pes: "Sergio Lopes",
          ativo_pes: true,
          email_pes: "sergio@sergio.com",
          role_pes: "docente",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Pessoas", null, {});
  },
};

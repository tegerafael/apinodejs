module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Niveis",
      [
        {
          descricao_niv: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao_niv: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descricao_niv: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Niveis", null, {});
  },
};

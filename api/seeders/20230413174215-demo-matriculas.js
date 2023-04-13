module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Matriculas",
      [
        {
          status_mat: "confirmado",
          estudante_id: 1,
          turma_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status_mat: "confirmado",
          estudante_id: 2,
          turma_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status_mat: "confirmado",
          estudante_id: 3,
          turma_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status_mat: "confirmado",
          estudante_id: 4,
          turma_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status_mat: "cancelado",
          estudante_id: 1,
          turma_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          status_mat: "cancelado",
          estudante_id: 2,
          turma_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Matriculas", null, {});
  },
};

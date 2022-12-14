("use strict");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "League",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tournament",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Meeting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};

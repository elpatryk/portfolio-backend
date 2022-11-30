"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          capacity: 4,
          description: "Test event",
          winnerId: null,
          rounds: 6,
          pitchId: 1,
          categoryId: 1,
          coachId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("events", null, {});
  },
};

"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "events",
      [
        {
          capacity: 4,
          description: "4 event",
          winnerId: null,
          rounds: 3,
          pitchId: 1,
          categoryId: 2,
          coachId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          capacity: 8,
          description: "8 teams",
          winnerId: null,
          rounds: 3,
          pitchId: 1,
          categoryId: 2,
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

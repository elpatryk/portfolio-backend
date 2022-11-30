"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "eventParticipations",
      [
        {
          teamId: 2,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 1,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 4,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 3,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        //
        {
          teamId: 1,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 2,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 4,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 3,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 5,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 6,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 7,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamId: 8,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("eventParticipations", null, {});
  },
};

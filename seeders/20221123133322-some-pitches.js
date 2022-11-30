"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pitches",
      [
        {
          adress: "Sportpark Spieringhorn 10, 1043 AA Amsterdam",
          capacity: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
          longitude: "4.826831200954333",
          latitude: "52.385806703857696",
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pitches", null, {});
  },
};

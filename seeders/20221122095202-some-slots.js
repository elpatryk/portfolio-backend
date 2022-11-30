("use strict");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "slots",
      [
        {
          timeSlots: "16:00-18:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          timeSlots: "18:00-20:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          timeSlots: "20:00-22:00",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("slots", null, {});
  },
};

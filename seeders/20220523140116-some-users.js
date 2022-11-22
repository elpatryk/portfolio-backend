"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Grzegorz",
          lastName: "Brzeczyszczykiewicz",
          email: "grzegorz@brzeczyszczykiewicz.com",
          imgUrl:
            "https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg",
          isCoach: true,
          birthday: "11-11-1992",
          password: bcrypt.hashSync("grzegorz", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

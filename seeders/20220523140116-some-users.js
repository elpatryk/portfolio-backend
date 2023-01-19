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
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: true,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("grzegorz", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 2,
        },
        {
          firstName: "Adam",
          lastName: "Brzeczyszczykiewicz",
          email: "adam@adam.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: true,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("adam", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 1,
        },
        {
          firstName: "Robert",
          lastName: "Lewandowski",
          email: "andrzej@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: true,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
        {
          firstName: "Leo",
          lastName: "Messi",
          email: "leomessi@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: false,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
        {
          firstName: "Frankie",
          lastName: "De Jong",
          email: "frankiedejong@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: false,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
        {
          firstName: "Memphis Depay",
          lastName: "Lewandowski",
          email: "MemphsDepay@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: false,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
        {
          firstName: "Piotr",
          lastName: "Zielinski",
          email: "piotrzielinski@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: false,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
        {
          firstName: "Rachel",
          lastName: "Greece",
          email: "rachelgreece@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: false,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
        {
          firstName: "Adam",
          lastName: "Malysz",
          email: "adammalysz@andrzej.com",
          imgUrl:
            "https://www.fcbarcelona.com/photo-resources/2022/11/02/9b93a4c7-2ec5-4409-b08e-e551b1c983df/mini_09-ROBERT_LEWANDOWSKI.png?width=670&height=790",
          isCoach: false,
          birthday: "11 / 11 / 1992",
          password: bcrypt.hashSync("andrzej", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          teamId: 4,
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};

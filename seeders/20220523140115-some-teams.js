("use strict");
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "teams",
      [
        {
          name: "Chicken Tikka Mo Salah",
          logo: "https://i.pinimg.com/736x/c3/e6/a5/c3e6a51fc25b484bc627667a241690c1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benteke Fried Chicken",
          logo: "https://image.similarpng.com/very-thumbnail/2020/11/Football-logo-design-on-transparent-background-PNG.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dembele Galaxy",
          logo: "https://www.creativefabrica.com/wp-content/uploads/2021/11/25/football-or-soccer-logo-vintage-vector-Graphics-20708517-1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Robben me Blind",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWGGMSm_GKyCcncFNB9AsjKTTEujpI_OOpg&usqp=CAU",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("teams", null, {});
  },
};

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
        {
          adress:
            "Amsterdam Football Club,Maurice Ravellaan 4, 1082 LC Amsterdam ",
          capacity: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
          longitude: "4.878169288948885",
          latitude: "52.33767427484103",
        },
        {
          adress: "Sportspark Olympiaplein, Olympiaplein, 1077 CL Amsterdam ",
          capacity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          longitude: "4.867955437922532",
          latitude: "52.347899500896595",
        },
        {
          adress: "Tweede Oosterparkstraat 254-E, 1092 BV Amsterdam",
          capacity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          longitude: "4.826831200954333",
          latitude: "52.385806703857696",
        },
        {
          adress: "FC Urban, Amstel 95, 1018 EL Amsterdam",
          capacity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          longitude: "4.923297970882302",
          latitude: "52.36021070378504",
        },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("pitches", null, {});
  },
};

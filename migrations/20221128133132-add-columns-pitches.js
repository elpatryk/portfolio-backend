"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("pitches", "longitude", Sequelize.STRING);
    await queryInterface.addColumn("pitches", "latitude", Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("pitches", "longitude");
    await queryInterface.removeColumn("pitches", "latitude");
  },
};

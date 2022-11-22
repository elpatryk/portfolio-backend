"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("eventParticipations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teamId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "teams",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "events",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("eventParticipations");
  },
};

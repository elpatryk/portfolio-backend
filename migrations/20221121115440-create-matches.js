"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("matches", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teamA: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      teamB: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      teamAScore: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      teamBScore: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      winnerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
      finished: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      round: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("matches");
  },
};

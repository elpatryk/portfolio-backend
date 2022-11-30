"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class eventParticipation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      eventParticipation.belongsTo(models.team);
      eventParticipation.belongsTo(models.event);
    }
  }
  eventParticipation.init(
    {
      teamId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "eventParticipation",
    }
  );
  return eventParticipation;
};

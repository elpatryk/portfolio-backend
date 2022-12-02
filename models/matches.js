"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      matches.belongsTo(models.event, { foreignKey: "eventId" });
      matches.belongsTo(models.team, { foreignKey: "teamA" });
      matches.belongsTo(models.team, { foreignKey: "teamB" });
    }
  }
  matches.init(
    {
      teamA: DataTypes.STRING,
      teamB: DataTypes.STRING,
      teamAScore: DataTypes.INTEGER,
      teamBScore: DataTypes.INTEGER,
      winnerId: DataTypes.INTEGER,
      eventId: DataTypes.INTEGER,
      finished: DataTypes.BOOLEAN,
      round: DataTypes.INTEGER,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "matches",
    }
  );
  return matches;
};

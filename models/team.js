"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      team.hasMany(models.user);
      team.belongsToMany(models.event, {
        through: "eventParticipations",
        foreignKey: "teamId",
      });
      team.hasMany(models.matches, { foreignKey: "teamA", as: "team_A" });
      team.hasMany(models.matches, { foreignKey: "teamB", as: "team_B" });
      team.hasMany(models.matches, { foreignKey: "winnerId", as: "winner" });
    }
  }
  team.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "team",
    }
  );
  return team;
};

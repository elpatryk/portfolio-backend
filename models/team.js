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

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pitch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pitch.hasMany(models.pitchReservation);
    }
  }
  pitch.init(
    {
      adress: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "pitch",
    }
  );
  return pitch;
};

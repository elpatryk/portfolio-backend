"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pitchReservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pitchReservation.belongsTo(models.pitch, { foreignKey: "pitchId" });
      pitchReservation.belongsTo(models.slots, { foreignKey: "slotsId" });
      pitchReservation.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  pitchReservation.init(
    {
      pitchId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      date: DataTypes.DATE,
      slotsId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "pitchReservation",
    }
  );
  return pitchReservation;
};

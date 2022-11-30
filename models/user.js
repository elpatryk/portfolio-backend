"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.team);
      user.hasMany(models.pitchReservation);
      user.belongsTo(models.team, { foreignKey: "teamId" });
    }
  }
  user.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      imgUrl: { type: DataTypes.STRING },
      isCoach: { type: DataTypes.BOOLEAN },
      birthday: { type: DataTypes.DATE },

      password: { type: DataTypes.STRING, allowNull: false },
      teamId: { type: DataTypes.INTEGER, allowNull: true },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};

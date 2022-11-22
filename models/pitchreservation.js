'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pitchReservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pitchReservation.init({
    pitchIdL: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    slotsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pitchReservation',
  });
  return pitchReservation;
};
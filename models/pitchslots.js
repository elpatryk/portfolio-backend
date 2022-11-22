'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pitchSlots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pitchSlots.init({
    pitchId: DataTypes.INTEGER,
    slotsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pitchSlots',
  });
  return pitchSlots;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pitch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pitch.init({
    adress: DataTypes.STRING,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pitch',
  });
  return pitch;
};
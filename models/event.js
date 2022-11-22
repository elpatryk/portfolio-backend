'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    capacity: DataTypes.INTEGER,
    description: DataTypes.STRING,
    winnerId: DataTypes.INTEGER,
    rounds: DataTypes.INTEGER,
    pitchId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    coachId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};
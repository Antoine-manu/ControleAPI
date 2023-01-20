'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parkings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Reservations_parking}) {
      this.hasMany(Reservations_parking, {
        foreignKey: "parking_id",
        as: "Reservations"
      });
    }
  }
  Parkings.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    daily_rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Parkings',
  });
  return Parkings;
};
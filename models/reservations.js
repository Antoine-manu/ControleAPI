'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Reservations_parking}) {
      this.hasMany(Reservations_parking, {
        foreignKey: "reservation_id",
        as: "Parkings"
      });
    }
  }
  Reservations.init({
    customer_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations_parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Parkings, Reservations}) {
      this.belongsTo(Parkings, {
        foreignKey: "id",
        as: "Parkings"
      });
      this.belongsTo(Reservations, {
        foreignKey: "id",
        as: "Reservations"
      });
    }
  }
  Reservations_parking.init({
    parking_id: DataTypes.INTEGER,
    reservation_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservations_parking',
  });
  return Reservations_parking;
};
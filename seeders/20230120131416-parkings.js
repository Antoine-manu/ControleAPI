'use strict';

const parking_place = [
  {
    name: 'Parking centre-ville',
    address: '2 rue de la liberté',
    city: 'Paris',
    daily_rate: 15.50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Parking Gare',
    address: '3 avenue des voyageurs',
    city: 'Lyon',
    daily_rate: 12.00,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Parking aeroport',
    address: "1 rue de l'Aviation",
    city: 'Marseille',
    daily_rate: 17.00,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Parking Center Commercial',
    address: '5 avenue des Champs-Elysées',
    city: 'Paris',
    daily_rate: 20.00,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'PARKING HOTEL',
    address: '7 rue de la paix',
    city: 'Lyon',
    daily_rate: 10.50,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Parkings', parking_place, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Parkings', null, {});
  }
};

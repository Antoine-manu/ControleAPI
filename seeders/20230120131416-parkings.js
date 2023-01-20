'use strict';

const faker = require('faker');

const parking_place = {
  name: faker.name.findName(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  daily_rate: faker.finance.amount()
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Parking', parking_place, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Parking', null, {});
  }
};

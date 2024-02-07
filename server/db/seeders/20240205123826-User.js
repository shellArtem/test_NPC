'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Jack',
      phone: '55(764)872-22-11',
      date_of_birth: new Date(1989, 1, 3),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Bob',
      phone: '55(764)872-22-13',
      date_of_birth: new Date(1999, 3, 7),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Anna',
      phone: '55(764)872-22-17',
      date_of_birth: new Date(2009, 5, 13),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'John',
      phone: '55(764)872-22-21',
      date_of_birth: new Date(2019, 7, 21),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

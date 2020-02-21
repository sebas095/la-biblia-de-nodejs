'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', [
      {
        firstname: 'Marluan',
        lastname: 'Espiritusanto',
        phone: '0000000000',
        email: 'marluan@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: 'Eric',
        lastname: 'Jimenez',
        phone: '00123560000',
        email: 'eric@gmail.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

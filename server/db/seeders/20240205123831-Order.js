'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    async function addRandomOrders() {
      const products = ['milk', 'coffee', 'oil', 'banana', 'gun', 'knife'];

      const orders = [];

      for (let i = 0; i < 150; i++) {
        const userId = Math.floor(Math.random() * 4) + 1;
        const randomProduct = products[Math.floor(Math.random() * products.length)];
        const totalPrice = Math.floor(Math.random() * 100) + 1;

        orders.push({
          user_id: userId,
          product_name: randomProduct,
          total_price: totalPrice,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }


      await queryInterface.bulkInsert('Orders', orders);
    }
    addRandomOrders();
  },

  async down(queryInterface, Sequelize) {
  }
};

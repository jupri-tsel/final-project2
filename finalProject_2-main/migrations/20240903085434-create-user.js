'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(50), 
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(50), 
        allowNull: false,
        unique:true,
      },
      email: {
        type: Sequelize.STRING(50), 
        allowNull: false,
        unique:true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING, 
        allowNull: false,
        defaultValue: "customer",
      },
      address: {
        type: Sequelize.TEXT,
      },
      phoneNumber: {
        type: Sequelize.STRING, 
        allowNull: false,
        unique:true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
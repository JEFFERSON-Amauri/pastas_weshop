'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('vendedor', {
         id:{
           type:Sequelize.INTEGER,
           primaryKey: true,
           allowNull: true,
           autoIncremet: true
          },
          nome: {
            type:Sequelize.STRING,
            allowNull: false,
          },
          cpf:{
            type:Sequelize.INTEGER,
            allowNull:false
          },
          telefone:{
            type:Sequelize.STRING,
            allowNull:false
          },
          email:{
            type:Sequelize.STRING,
            allowNull:false
          },
          senha:{
            type:Sequelize.INTEGER,
            allowNull:true
          },
          createdAt:Sequelize.dropTable.dropTable,
          updatedAt: Sequelize.updatedAt
         });
     
  },

  down: async (queryInterface, Sequelize) => {
    //apagar tabela
      await queryInterface.dropTable('vendedor');
     
  }
};

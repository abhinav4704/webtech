const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('abhinav', 'root', 'cashew4704', {
  host: 'localhost',
  dialect: 'mysql',
});



module.exports = sequelize;

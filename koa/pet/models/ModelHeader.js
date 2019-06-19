var Sequelize = require('sequelize');
var sequelize = new Sequelize('pet', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
module.exports = sequelize;

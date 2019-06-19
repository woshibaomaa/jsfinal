var Sequelize = require('sequelize');
var sequelize =require('./ModelHeader');

var PetinfoModel = sequelize.define('petinfos', {
    id: {type:Sequelize.BIGINT,primaryKey: true},
    uid: Sequelize.BIGINT,
    nicheng: Sequelize.STRING,
    pettype: Sequelize.INTEGER,
    petsort: Sequelize.STRING,
    sex: Sequelize.TEXT('tiny'),
    age: Sequelize.INTEGER,
    introduce: Sequelize.STRING,
    petimg: Sequelize.STRING,
    updtime:Sequelize.DATE
},{
    timestamps: false,
    //paranoid: true  //获取不到id的返回值
});

module.exports = PetinfoModel;
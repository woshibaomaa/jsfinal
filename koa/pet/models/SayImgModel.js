var Sequelize = require('sequelize');
var sequelize =require('./ModelHeader');

var SayImgModel = sequelize.define('sayimgs', {
    id: {type:Sequelize.BIGINT,primaryKey: true},
    uid:Sequelize.BIGINT,
    sayid:Sequelize.BIGINT,
    imgpath: Sequelize.STRING
},{
    timestamps: false,
    //paranoid: true  //获取不到id的返回值
});

module.exports = SayImgModel;
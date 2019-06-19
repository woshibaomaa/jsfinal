let formidable=require('formidable');
let PetinfoModel = require('../models/PetinfoModel')

// let {getOnly,postOnly} = require('./common')

class PetService{
    constructor(){
        // super();
    }

    async subpetInfo(ctx){
        let loginbean = ctx.session.loginbean;
        let form = new formidable.IncomingForm();   //创建上传表单
        form.encoding = 'utf-8';        //设置编辑
        form.uploadDir = './public/images/petimgs';     //设置上传目录 文件会自动保存在这里
        form.keepExtensions = true;     //保留后缀
        form.maxFieldsSize = 5 * 1024 * 1024 ;   //文件大小5M
        let fields = await new Promise(function(resolve,reject){
            form.parse(ctx.req, function (err, fields, files) {
                if(err){
                    console.log(err);
                    resolve(0);
                    return;
                }
                console.log(fields);
                console.log(files);
                fields.petimg=files.petimg.path.replace('public','');
                resolve(fields);
            })

        });
        fields.uid = loginbean.id;
        let rs = await PetinfoModel.create(fields);
        ctx.body=rs;
        // ctx.body='收到'+fields.petnicheng;
    }
    async mypetinfo(ctx){
        console.log('-----------------------')
        let loginbean = ctx.session.loginbean;
        console.log(loginbean);
        if(loginbean){
            let pet={uid:loginbean.id};
            let rs = await PetinfoModel.findAll({where:pet});
            // console.log(rs);
            ctx.body=rs;
        }else{
            ctx.body='登录过期';
        }

    }
    async delpetInfo(ctx){
        let loginbean = ctx.session.loginbean;
        if(loginbean){
            let pet={id:ctx.query.id,uid:loginbean.id};

            let rs = await PetinfoModel.destroy({where:pet});
            console.log('bbbbbbbbbbb'+rs);
            ctx.body=1;
        }else{
            ctx.body=0;
        }

    }


}

exports.service = PetService;

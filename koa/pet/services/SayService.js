let formidable = require('formidable');
let SayModel = require('../models/SayModel');
let SayImgModel = require('../models/SayImgModel');
class SayService{
    constructor(){
        // super();
    }

    async subSay(ctx){
        let loginbean = ctx.session.loginbean;
        let form = new formidable.IncomingForm();   //创建上传表单
        form.encoding = 'utf-8';        //设置编辑
        form.uploadDir = './public/images/petphotos';     //设置上传目录 文件会自动保存在这里
        form.keepExtensions = true;     //保留后缀
        form.multiples=true;		//允许多文件上传
        form.maxFieldsSize = 5 * 1024 * 1024 ;   //文件大小5M
        let fields = await new Promise(function(resolve,reject){
            form.parse(ctx.req, function (err, fields, files) {
                if(err){
                    console.log(err);
                    resolve(0);
                    return;
                }
                fields.imgArr = [];
                let len = files.petimg.length;
                for(let i=0;i<len;i++){
                    if(files.petimg[i].size>0){
                        //console.log(files.petimg[i].path);
                        let imgpath = files.petimg[i].path.replace('public','');
                        let sayImg = {imgpath:imgpath};
                        fields.imgArr.push(sayImg);
                    }
                }
                //console.log(fields.content);
                // if(files.petimgFile.size>0){
                // 	fields.petimg=files.petimg.path.replace('public','');
                // 	resolve(fields);
                // }else{
                // 	fields.petimg='';
                resolve(fields);
                // }
            })

        });
        fields.uid = loginbean.id;
        let sayRs = await SayModel.create(fields);
        let imgArr = fields.imgArr;
        let len = imgArr.length;
        for(let i=0;i<len;i++){
            imgArr[i].uid = loginbean.id;
            imgArr[i].sayid = sayRs.null;
            await SayImgModel.create(imgArr[i]);
        }


        ctx.body='成功';
    }
}

exports.service = SayService;
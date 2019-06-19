let UserModel = require('../models/UserModel')
// let {getOnly,postOnly} = require('./common')

class UserService{
    constructor(){
        // super();
    }

    async zhuce(ctx){
        // postOnly(ctx);
        let user={
            email:ctx.request.body.email,
            pwd:ctx.request.body.pwd,
            nicheng:ctx.request.body.nicheng,
            role:0
        };
        try{
            let rs = await UserModel.create(user);
            ctx.body=1;
        }catch(err){
            let errMsg = err.errors[0].message;
            if(errMsg.indexOf('emailuniq')>-1){
                ctx.body=2;
            }else if(errMsg.indexOf('nichenguniq')>-1){
                ctx.body=3;
            }else{
                ctx.body=0;
            }
        }
    }
    async login(ctx){
        let user={
            email:ctx.request.body.email,
            pwd:ctx.request.body.pwd
        };
        let rs = await UserModel.findOne({where:user});
        if(rs!=null){
            let loginbean = {};
            loginbean.id=rs.id;
            loginbean.nicheng=rs.nicheng;
            loginbean.role=rs.role;
            ctx.session.loginbean=loginbean;
            // console.log(ctx.session.loginbean.nicheng);
            ctx.body=loginbean;
            // ctx.body='登录成功';
        }else{
            ctx.body=0;
            // ctx.body='账号/密码错误';
        }
    }
    async getLoginBean(ctx){
        let loginbean = ctx.session.loginbean;
        console.log(loginbean);
        if(loginbean){
            ctx.body=loginbean;
        }else{
            ctx.body=0;
        }
    }


}

exports.service = UserService;

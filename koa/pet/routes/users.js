const router = require('koa-router')()
var UserModel = require('../models/UserModel')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/zhuce',async function (ctx, next) {
    // let emali=ctx.request.body.email;
    // ctx.body='收到'+emali;
    let user={
        email:ctx.request.body.email,
        pwd:ctx.request.body.pwd,
        nicheng:ctx.request.body.nicheng,
        role:0
    };
    try{
        let rs = await UserModel.create(user);
        console.log(rs);

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
})
router.post('/login', async function (ctx, next) {
    let user={
        email:ctx.request.body.email,
        pwd:ctx.request.body.pwd
    };
    let rs = await UserModel.findOne({where:user});
    // console.log(rs);

    if(rs!=null){
        let loginbean = {};
        loginbean.id=rs.id;
        loginbean.nicheng=rs.nicheng;
        loginbean.role=rs.role;
        ctx.session.loginbean=loginbean;
        console.log(ctx.session.loginbean);
        ctx.body=loginbean;
        // ctx.body='登录成功';
    }else{
        // ctx.body='账号/密码错误';
        ctx.body=2;
    }
})
router.get('/mypet', async function (ctx, next) {
    let loginbean = ctx.session.loginbean;
    console.log('------aaaaaas');
    console.log(loginbean);
    ctx.body='mypet';
})
module.exports = router

const router = require('koa-router')()
let Services = require('../services/services');

// router.prefix('/api')

router.get('/:name?/:method?',async function (ctx, next) {
    var name    = ctx.params.name || 'empty';
    var method  = ctx.params.method || 'empty';
    let service = new Services[name+'Service']();
    await service[method](ctx);
    return;
})

router.post('/:name?/:method?',async function (ctx, next) {
    var name    = ctx.params.name || 'empty';
    var method  = ctx.params.method || 'empty';
    var service = new Services[name+'Service']();
    await service[method](ctx);
    return;
})

module.exports = router
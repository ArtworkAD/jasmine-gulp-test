const koa = require('koa');
const app = module.exports.app = new koa();

app.listen(process.env.PORT || 3000);

const KoaRouter = require('@koa/router')
const { create } = require('../controller/moment.controller')
const {
  verifyAuth
} = require('../middleware/login.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

momentRouter.post('/', verifyAuth, create)

module.exports = momentRouter

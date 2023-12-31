const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/users' })

const {
  verifyUser, handlePassword
} = require('../middleware/user.middleware')

const {
  create
} = require('../controller/user.controller')

userRouter.post('/', verifyUser, handlePassword, create)

module.exports = userRouter

const userService = require('../service/user.service')
const {REGISTER_SUCCESS}  = require('../constants/success-type')

class UserController {
  async create(ctx, next) {
    // 1.获取传递过来的参数
    const user = ctx.request.body
  
    // 2.将user存储到数据库中
    await userService.create(user)
    ctx.app.emit("success", REGISTER_SUCCESS, ctx);
  }
}

module.exports = new UserController()

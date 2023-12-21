const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    // 1.获取传递过来的参数
    const user = ctx.request.body
    console.log(user)

    // 2.将user存储到数据库中
    const result = await userService.create(user)
    
    ctx.body = {
      code: 0,
      message: '创建用户成功'
    }
  }
}

module.exports = new UserController()

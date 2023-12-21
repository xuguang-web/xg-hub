class MomentController {
  create(ctx, next) {
    ctx.body = `创建动态成功~`
  }
}

module.exports = new MomentController()

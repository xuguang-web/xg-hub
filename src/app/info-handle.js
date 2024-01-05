function infoHandle(info, ctx ,data = null) {
  let message = info?.message || ""
  let code = info?.code || 0
  ctx.body = {
    code,
    message,
    data
  }
}
module.exports = infoHandle

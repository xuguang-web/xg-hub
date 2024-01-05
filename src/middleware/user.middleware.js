const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
  EFFECT_BIGIN_TIME_IF_REQUIRE,
  CELLPHONE_IS_REQUIRED,
  EFFECT_END_TIME_IF_REQUIRE,
  BEGIN_TIME_LOWER_END_TIME,
} = require("../constant");
const userService = require("../service/user.service");
const { md5password } = require("../utils/password-handle");
const { compareTime } = require("../utils/format");

async function verifyUser(ctx, next) {
  // 1.取出用户名和密码
  const { name, password, effectBeginTime, effectEndTime, cellphone } =
    ctx.request.body;

  // 2.判断是否有传入
  if (!name || !password) {
    return ctx.app.emit("info", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  if (!cellphone) {
    return ctx.app.emit("info", CELLPHONE_IS_REQUIRED, ctx);
  }

  // 3.有效时间处理
  if (!effectBeginTime) {
    return ctx.app.emit("info", EFFECT_BIGIN_TIME_IF_REQUIRE, ctx);
  }

  if (!effectEndTime) {
    return ctx.app.emit("info", EFFECT_END_TIME_IF_REQUIRE, ctx);
  }

  //3.1 判断开始结束时间是否符合要求
  const flag = compareTime(effectBeginTime, effectEndTime);
  if (!flag) {
    return ctx.app.emit("info", BEGIN_TIME_LOWER_END_TIME, ctx);
  }

  // 4.查询用户是否存在
  const users = await userService.getUserByName(name);
  if (users.length) {
    return ctx.app.emit("info", NAME_ALREADY_EXISTS, ctx);
  }

  // 5.通过验证, 调用next
  await next();
}

// 处理密码
async function handlePassword(ctx, next) {
  const { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);
  await next();
}

module.exports = {
  verifyUser,
  handlePassword,
};

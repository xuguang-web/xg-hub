const jwt = require('jsonwebtoken');
const { PUBLIC_KEY } = require('../app/config');
const {
  NAME_IS_NOT_EXISTS,
  NAME_OR_PASSWORD_IS_REQUIRED,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION
} = require("../constants/error-types");
const userService = require("../service/user.service");
const { md5password } = require("../utils/password-handle");

async function verifyLogin(ctx, next) {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2.判断是否有传入
  if (!name || !password) {
    
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 3.查询用户是否存在
  const users = await userService.getUserByName(name);
  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
  }

  // 4.判断密码是否正确
  if (md5password(password) !== user.password) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRENT, ctx);
  }

  // 5.登录成功
  ctx.user = user;

  await next();
}

async function verifyAuth(ctx, next) {
  console.log("验证授权的middleware~");
  // 1.获取token
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    return ctx.app.emit("error", UNAUTHORIZATION, ctx);
  }
  const token = authorization.replace("Bearer ", "");
  console.log(token)

  // 2.验证token(id/name/iat/exp)
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    ctx.user = result;
    await next();
  } catch (err) {
    console.log(err)
    ctx.app.emit('error', UNAUTHORIZATION, ctx);
  }
}

module.exports = {
  verifyLogin,
  verifyAuth,
};

const { PUBLIC_KEY, PRIVATE_KEY } = require("../app/config");
const { LOGIN_SUCCESS } = require("../constant");
const jwt = require("jsonwebtoken");

class LoginController {
  login(ctx) {
    const { id, name } = ctx.user;

    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      algorithm: "RS256",
      expiresIn: 30 * 24 * 60 * 60,
    });

    ctx.app.emit("info", LOGIN_SUCCESS, ctx, {
      id,
      name,
      token,
    });
  }
}

module.exports = new LoginController();

const KoaRouter = require("@koa/router");
const fileRouter = new KoaRouter({ prefix: "/file" });
const {
  verifyAuth,
  handleAvatar
} = require("../middleware");
const { create } = require("../controller/file.controller");

fileRouter.post(
  "/avatar",
  verifyAuth,
  handleAvatar,
  create
);

module.exports = fileRouter;

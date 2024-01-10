const KoaRouter = require("@koa/router");
const userRouter = new KoaRouter({ prefix: "/users" });

const {
  verifyUser,
  vertifyUpdateUser,
  handlePassword,
  verifyAuth,
} = require("../middleware");

const {
  create,
  update,
  remove,
  detail,
  list,
  showAvatarImage,
} = require("../controller/user.controller");

// 新增(注册)用户
userRouter.post("/add", verifyUser, handlePassword, create);

// 修改用户
userRouter.post("/update", verifyAuth, vertifyUpdateUser, update);

// 删除用户
userRouter.delete("/:id", verifyAuth, remove);

// 查询详情
userRouter.get("/:id", detail);

// 列表详情
userRouter.post("/list", list);

// 为用户提供头像
userRouter.get("/avatar/:userId", showAvatarImage);

module.exports = userRouter;

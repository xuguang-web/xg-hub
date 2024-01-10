const fs = require("fs");

const userService = require("../service/user.service");
const fileService = require("../service/file.service");
const {
  REGISTER_SUCCESS,
  UPDATE_SUCCESS,
  QUERY_SUCCESS,
  DELETE_SUCCESS,
} = require("../constant");

const { AVATAR_PATH } = require("../app/path");

const { handleUserDetailData, handleUserListData } = require("./hook");

class UserController {
  async create(ctx) {
    // 1.获取传递过来的参数
    const user = ctx.request.body;

    // 2.将user存储到数据库中
    await userService.create(user);
    ctx.app.emit("info", REGISTER_SUCCESS, ctx);
  }

  async update(ctx) {
    // 1.获取传递过来的参数
    const user = ctx.request.body;

    // 2.将user存储到数据库中
    await userService.update(user);
    ctx.app.emit("info", UPDATE_SUCCESS, ctx);
  }

  async list(ctx) {
    // 1.获取传递过来的参数
    const { pageSize, pageNum } = ctx.request.body;

    // 2.将user存储到数据库中
    try {
      const res = await userService.list(pageNum, pageSize);
      ctx.app.emit("info", QUERY_SUCCESS, ctx, handleUserListData(res));
    } catch (err) {
      console.log(err);
    }
  }

  async detail(ctx) {
    // 1.获取momentId
    const { id } = ctx.params;
    try {
      const res = await userService.detail(id);

      ctx.app.emit("info", QUERY_SUCCESS, ctx, handleUserDetailData(res[0]));
    } catch (err) {
      console.log(err);
    }
  }

  async remove(ctx) {
    // 1.获取momentId
    const { id } = ctx.params;
    try {
      const res = await userService.remove(id);
      ctx.app.emit("info", DELETE_SUCCESS, ctx, res);
    } catch (err) {
      console.log(err);
    }
  }

  // 用户头像信息
  async showAvatarImage(ctx, next) {
    // 1.获取用户id
    const { userId } = ctx.params;
    const imageInfo = await fileService.getFileByUserId(userId);

    //2.读取头像所在的文件(服务器上的) 设置类型
    const { filename, mimetype } = imageInfo;
    ctx.type = mimetype;
    ctx.body = fs.createReadStream(`${AVATAR_PATH}/${filename}`);
  }
}

module.exports = new UserController();

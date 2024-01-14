const service = require("../service/file.service");
const { OPERATE_SUCCESS } = require("../constant");

class fileController {
  async create(ctx) {
    console.log(
      "%c [  ]-7",
      "font-size:13px; background:pink; color:#bf2c9f;",
      ctx
    );
    const { id } = ctx.user;
    const file = ctx.request.file;
    const { filename, mimetype, size } = file;
    const res = await service.create(id, filename, mimetype, size);
    ctx.app.emit("info", OPERATE_SUCCESS, ctx, null);
  }
}

module.exports = new fileController();

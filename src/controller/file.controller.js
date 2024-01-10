const service = require("../service/file.service");
const { OPERATE_SUCCESS } = require("../constant");

class fileController {
  async create(ctx) {
    const { id } = ctx.user;
    const file = ctx.request.file;
    const { filename, mimetype, size } = file;
    const res = await service.create(id, filename, mimetype, size);
    ctx.app.emit("info", OPERATE_SUCCESS, ctx, null);
  }
}

module.exports = new fileController();

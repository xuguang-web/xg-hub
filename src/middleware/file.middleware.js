const service = require("../service/file.service");
const { FILENAME_IS_EXISTS } = require("../constant");
const { AVATAR_PATH } = require("../app/path");

const multer = require("@koa/multer");
const uploadAvatar = multer({
  dest: AVATAR_PATH,
});
const handleAvatar = uploadAvatar.single("avatar");

// const handleAvartarDetail = async (ctx, next) => {
//   const file = ctx.request.file;
//   const { filename } = file;
//   const flag = await service.getFileByName(filename);

//   if (flag) {
//     return ctx.app.emit("info", FILENAME_IS_EXISTS, ctx);
//   }
//   await next();
// };

module.exports = {
  handleAvatar,
  // handleAvartarDetail,
};

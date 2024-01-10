const fs = require("fs");
const path = require("path");

// 获取当前目录下所有以 hook.js 结尾的文件
const hooks = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith("middleware.js"));

// 导出所有 middleware.js 文件中导出的方法
hooks.forEach((file) => {
  const filepath = path.join(__dirname, file);
  const hook = require(filepath);
  module.exports = { ...module.exports, ...hook };
});

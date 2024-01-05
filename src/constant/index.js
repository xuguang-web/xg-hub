const fs = require('fs');
const path = require('path');

// 获取当前文件所在的目录
const dirPath = path.dirname(__filename);

// 递归函数，用于获取指定目录及其下级目录中的所有 JavaScript 文件中的导出内容
function getExportsRecursively(directory) {
  let exports = {};

  // 获取目录中的所有文件和子目录
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  entries.forEach(entry => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      // 如果是子目录，则递归调用该函数
      exports = { ...exports, ...getExportsRecursively(filePath) };
    } else if (entry.isFile() && path.extname(entry.name) === '.js') {
      // 如果是 JavaScript 文件，则读取文件内容并获取导出对象
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const fileExports = require(filePath);
      exports = { ...exports, ...fileExports };
    }
  });

  return exports;
}

// 获取当前目录及其下级目录中的所有 JavaScript 文件中的导出内容
const allExports = getExportsRecursively(dirPath);

// 导出统一的内容
module.exports = allExports;
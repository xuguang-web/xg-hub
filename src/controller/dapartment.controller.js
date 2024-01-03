const departmentService = require("../service/department.service");
const { buildTreeData } = require("../utils/data");
const { QUERY_SUCCESS } = require("../constants/success-type");

class DepartmentController {
  async getTreeData(ctx) {
    const res = await departmentService.getTreeData();
    // 处理查询出来的树结构数据
    const treeData = buildTreeData(res);
    ctx.app.emit("success", QUERY_SUCCESS, ctx, treeData);
  }

  async addTreeData(ctx) {
    const res = await departmentService.getTreeData();
    // 处理查询出来的树结构数据
    const treeData = buildTreeData(res);
    ctx.app.emit("success", QUERY_SUCCESS, ctx, treeData);
  }
}

module.exports = new DepartmentController();

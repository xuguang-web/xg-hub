const departmentService = require("../service/department.service");
const { buildTreeData } = require("../utils/data");
const {
  ADD_SCUUESS,
  QUERY_SUCCESS,
  UPDATE_SUCCESS,
  DELETE_SUCCESS,
} = require("../constant");

class DepartmentController {
  async getTreeData(ctx) {
    const res = await departmentService.getTreeData();
    // 处理查询出来的树结构数据
    const treeData = buildTreeData(res);
    ctx.app.emit("info", QUERY_SUCCESS, ctx, treeData);
  }

  async addDepartment(ctx, next) {
    const { name, parentId } = ctx.request.body;
    try {
      const res = await departmentService.addTreeData(name, parentId);
      ctx.app.emit("info", ADD_SCUUESS, ctx, res);
      await next();
    } catch (err) {
      console.log(err);
    }
  }

  async updateDepartment(ctx, next) {
    const { id, name, parentId } = ctx.request.body;
    try {
      const res = await departmentService.updateTreeData(name, parentId, id);
      ctx.app.emit("info", UPDATE_SUCCESS, ctx, res);
      await next();
    } catch (err) {
      console.log(err);
    }
  }

  async delDepartment(ctx, next) {
    // 1.获取momentId
    const { id } = ctx.params;
    try {
      const res = await departmentService.delDepartment(id);
      ctx.app.emit("info", DELETE_SUCCESS, ctx, res);
      await next();
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new DepartmentController();

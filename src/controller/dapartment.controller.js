const departmentService = require("../service/department.service");
const { buildTreeData } = require("../utils/data");
const { ADD_SCUUESS,QUERY_SUCCESS,UPDATE_SUCCESS } = require("../constant");

class DepartmentController {
  async getTreeData(ctx) {
    const res = await departmentService.getTreeData();
    // 处理查询出来的树结构数据
    const treeData = buildTreeData(res);
    ctx.app.emit("info", QUERY_SUCCESS, ctx, treeData);
  }

  async addTreeData(ctx,next) {
    const { name,leader,parentId} = ctx.request.body
    try {
      const res = await departmentService.addTreeData(name,leader,parentId);
      ctx.app.emit("info", ADD_SCUUESS, ctx,res);
      await next();
    } catch (err) {
      console.log(err)
    }
  }

  async updateTreeData(ctx,next) {
    const { id,name,leader,parentId} = ctx.request.body
    try {
      const res = await departmentService.updateTreeData(name, leader, parentId,id);
      ctx.app.emit("info", UPDATE_SUCCESS, ctx,res);
      await next();
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new DepartmentController();

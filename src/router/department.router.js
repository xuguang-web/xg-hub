const KoaRouter = require("@koa/router");
const {
  getTreeData,
  addDepartment,
  updateDepartment,
  delDepartment,
} = require("../controller/dapartment.controller");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  handleAddDepartment,
  handleUpdateDepartment,
  handleDelDepartment,
} = require("../middleware/department.middleware");

const departmentRouter = new KoaRouter({ prefix: "/department" });

// 查询部门目录树
departmentRouter.get("/treeData", verifyAuth, getTreeData);

// 新增部门
departmentRouter.post("/add", verifyAuth, handleAddDepartment, addDepartment);

// 更新部门
departmentRouter.post(
  "/update",
  verifyAuth,
  handleUpdateDepartment,
  updateDepartment
);

// 删除部门
departmentRouter.delete("/:id", verifyAuth, handleDelDepartment, delDepartment);

module.exports = departmentRouter;

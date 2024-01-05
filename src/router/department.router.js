const KoaRouter = require("@koa/router");
const {
  getTreeData,
  addTreeData,
  updateTreeData
} = require("../controller/dapartment.controller");
const { verifyAuth } = require("../middleware/login.middleware");
const {  handleAddDepartment,handleUpdateDepartment } = require("../middleware/department.middleware")


const departmentRouter = new KoaRouter({ prefix: "/department" });

// 查询部门目录树
departmentRouter.get("/treeData", verifyAuth, getTreeData);

// 新增部门
departmentRouter.post("/add", verifyAuth, handleAddDepartment,addTreeData);

// 更新部门
departmentRouter.post("/update", verifyAuth, handleUpdateDepartment,updateTreeData);

module.exports = departmentRouter;

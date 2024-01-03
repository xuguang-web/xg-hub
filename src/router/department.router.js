const KoaRouter = require("@koa/router");
const {
  getTreeData,
  addTreeData,
} = require("../controller/dapartment.controller");
const { verifyAuth } = require("../middleware/login.middleware");

const departmentRouter = new KoaRouter({ prefix: "/department" });

// 查询部门目录树
departmentRouter.get("/treeData", verifyAuth, getTreeData);

// 新增部门
departmentRouter.post("/add", verifyAuth, addTreeData);

module.exports = departmentRouter;

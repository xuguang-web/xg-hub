const {
  DEPARTMENT_ID_IS_REQUIRED,
  ID_IS_NOT_EXISTS,
  DEPARTMENT_HAS_CHILDREN,
} = require("../constant");
const {
  getDataByField,
  hasChildern,
} = require("../service/department.service");
const {
  handleDepartmentParams,
  handleDepartmentNameRepeat,
  handleDepartmentIdExists,
} = require("./hook");

async function handleAddDepartment(ctx, next) {
  let flag = true;
  const { name, parentId } = ctx.request.body;
  try {
    flag = handleDepartmentParams(name, parentId, ctx);
    if (!flag) {
      return;
    }
    flag = await handleDepartmentNameRepeat(name, ctx);
    if (!flag) {
      return;
    }
  } catch (err) {
    console.log(err);
  }
  await next();
}

async function handleUpdateDepartment(ctx, next) {
  let flag = true;
  const { name, parentId, id } = ctx.request.body;
  flag = handleDepartmentParams(name, parentId, ctx);
  if (!flag) {
    return;
  }
  if (!id) {
    return ctx.app.emit("info", DEPARTMENT_ID_IS_REQUIRED, ctx);
  }
  flag = await handleDepartmentIdExists(id, ctx);
  if (!flag) {
    return ctx.app.emit("info", ID_IS_NOT_EXISTS, ctx);
  }
  flag = await handleDepartmentNameRepeat(name, ctx);
  if (!flag) {
    return;
  }
  await next();
}

async function handleDelDepartment(ctx, next) {
  const { id } = ctx.params;
  const res = await getDataByField(id, "id");
  if (!res.length) {
    return ctx.app.emit("info", ID_IS_NOT_EXISTS, ctx);
  }
  // 判断是否还包含子集
  const flag = await hasChildern(id);
  if (flag) {
    return ctx.app.emit("info", DEPARTMENT_HAS_CHILDREN, ctx);
  }

  await next();
}

module.exports = {
  handleAddDepartment,
  handleUpdateDepartment,
  handleDelDepartment,
};

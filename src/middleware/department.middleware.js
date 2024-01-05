const {
    DEPARTMENT_ID_IS_REQUIRED
} = require("../constant");

const { handleDepartmentParams,handleDepartmentNameRepart } = require("./hook")

async function handleAddDepartment(ctx, next) {
  let flag = true
  const {name,leader,parentId} = ctx.request.body;
  try {
    flag = handleDepartmentParams(name,leader,parentId,ctx)

    if(!flag) {
      return
    }
    flag = await handleDepartmentNameRepart(name,ctx)
    if(!flag) {
      return
    }
  } catch(err) {
    console.log(err)
  }
  await next();
}

async function handleUpdateDepartment(ctx, next) {
    let flag = true
    const {name,leader,parentId,id} = ctx.request.body;
    if(!id) {
        return ctx.app.emit("info", DEPARTMENT_ID_IS_REQUIRED, ctx);
    }
    flag = handleDepartmentParams(name,leader,parentId,ctx)
    if(!flag) {
       return
    }
    flag = await handleDepartmentNameRepart(name,ctx)
    if(!flag) {
       return
    }
    await next();
  }

module.exports = {
    handleAddDepartment,
    handleUpdateDepartment
};

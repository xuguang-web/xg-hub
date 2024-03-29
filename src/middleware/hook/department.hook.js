const {
  DEPARTMENT_NAME_IS_REQUIRED,
  PARENTID_IS_REQUIRED,
  DEPARTMENT_IS_EXISTS,
  ID_IS_EXISTS,
} = require("../../constant");

const { getDataByField } = require("../../service/department.service");

const handleDepartmentParams = (name, leader, parentId, ctx) => {
  let flag = true;
  if (!name) {
    flag = false;
    ctx.app.emit("info", DEPARTMENT_NAME_IS_REQUIRED, ctx);
    return flag;
  }
  if (!parentId) {
    flag = false;
    ctx.app.emit("info", PARENTID_IS_REQUIRED, ctx);
    return flag;
  }
  return flag;
};

const handleDepartmentNameRepeat = async (name, ctx) => {
  let flag = true;
  const res = await getDataByField(name, "name");
  if (res.length) {
    flag = false;
    ctx.app.emit("info", DEPARTMENT_IS_EXISTS, ctx);
  }
  return flag;
};

const handleDepartmentIdExists = async (id, ctx) => {
  let flag = false;
  const res = await getDataByField(id, "id");

  if (res.length) {
    flag = true;
    ctx.app.emit("info", ID_IS_EXISTS, ctx);
  }
  return flag;
};

module.exports = {
  handleDepartmentParams,
  handleDepartmentNameRepeat,
  handleDepartmentIdExists,
};

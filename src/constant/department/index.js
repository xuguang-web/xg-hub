const DEPARTMENT_NAME_IS_REQUIRED = {
  message: "部门名称不能为空~",
  code: -1,
};

const PARENTID_IS_REQUIRED = {
  message: "父目录ID不能为空~",
  code: -1,
};

const DEPARTMENT_IS_EXISTS = {
  message: "部门名称已存在~",
  code: -1,
};

const DEPARTMENT_ID_IS_REQUIRED = {
  message: "部门id不能为空~",
  code: -1,
};

const DEPARTMENT_HAS_CHILDREN = {
  message: "当前部门包含子部门，无法删除~",
  code: -1,
};

module.exports = {
  DEPARTMENT_NAME_IS_REQUIRED,
  PARENTID_IS_REQUIRED,
  DEPARTMENT_IS_EXISTS,
  DEPARTMENT_ID_IS_REQUIRED,
  DEPARTMENT_HAS_CHILDREN,
};

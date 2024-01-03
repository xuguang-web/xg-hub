const {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  ADD_SCUUESS,
  DELETE_SUCCESS,
  OPERATE_SUCCESS,
  UPDATE_SUCCESS,
  QUERY_SUCCESS,
} = require("../constants/success-type");

function successHandle(success, ctx, data = null) {
  let message = success;
  let code = 0;
  switch (success) {
    case LOGIN_SUCCESS:
      message = "登录成功~";
      break;
    case REGISTER_SUCCESS:
      message = "注册成功~";
      break;
    case ADD_SCUUESS:
      message = "新增成功~";
      break;
    case DELETE_SUCCESS:
      message = "删除成功~";
      break;
    case OPERATE_SUCCESS:
      message = "操作成功~";
      break;
    case UPDATE_SUCCESS:
      message = "修改成功~";
      break;
    case QUERY_SUCCESS:
      message = "查询成功~";
      break;
  }

  ctx.body = {
    code,
    message,
    data,
  };
}

module.exports = successHandle;

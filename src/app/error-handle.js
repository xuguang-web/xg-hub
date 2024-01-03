const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_ALREADY_EXISTS, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRENT, UNAUTHORIZATION,EFFECT_BIGIN_TIME_IF_REQUIRE,EFFECT_END_TIME_IF_REQUIRE, BEGIN_TIME_LOWER_END_TIME,EXPIRED,CELLPHONE_IS_REQUIRED } = require("../constants/error-types")

function errorHandle(error, ctx) {
  let message = error
  let code = 0
  switch(error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或者密码必须传入~'
      break
    case NAME_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经存在, 请检测用户名~'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户名不存在, 请检查你的用户名~'
      break
    case PASSWORD_IS_INCORRENT:
      code = -1004
      message = '密码错误, 请检查你的密码~'
      break
    case UNAUTHORIZATION:
      code = -1005
      message = 'token无效~'
      break
    case CELLPHONE_IS_REQUIRED:
      code = -1
      message = '电话号码不能为空~'
      break
    case  EFFECT_BIGIN_TIME_IF_REQUIRE:
      code = -1
      message = '有效日期开始时间不能为空~'
      break
    case EFFECT_END_TIME_IF_REQUIRE:
        code = -1
        message = '有效日期结束时间不能为空~'
        break
    case  BEGIN_TIME_LOWER_END_TIME:
        code = -1
        message = '开始时间不得小于结束时间~'
        break
    case EXPIRED:
        code = -1
        message = '有效期已过，请重新注册~'
        break
    
  }

  ctx.body = {
    code,
    message,
    data: null
  }
}

module.exports = errorHandle

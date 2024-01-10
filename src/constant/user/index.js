const NAME_OR_PASSWORD_IS_REQUIRED = {
  message: "用户名或密码不能为空",
  code: -1,
};

const NAME_ALREADY_EXISTS = {
  message: "用户名已存在",
  code: -1,
};

const NAME_IS_NOT_EXISTS = {
  message: "用户名不存在~",
  code: -1,
};

const PASSWORD_IS_INCORRENT = {
  message: "密码错误~",
  code: -1,
};

const UNAUTHORIZATION = {
  message: "未授权",
  code: -1,
};

const EFFECT_BIGIN_TIME_IF_REQUIRE = {
  message: "有效期开始时间不能为空~",
  code: -1,
};

const EFFECT_END_TIME_IF_REQUIRE = {
  message: "有效期结束时间不能为空~",
  code: -1,
};

const BEGIN_TIME_LOWER_END_TIME = {
  message: "有效期开始时间需小于结束时间~",
  code: -1,
};

const CELLPHONE_IS_REQUIRED = {
  message: "手机号码不能为空~",
  code: -1,
};

const EXPIRED = {
  message: "有效期已过,请重新注册~",
  code: -1,
};

const AVATARURL_IS_REQUIRED = {
  message: "用户头像不能为空~",
  code: -1,
};

const USER_ID_IS_REQUIRED = {
  message: "用户id不能为空~",
  code: -1,
};

module.exports = {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRENT,
  UNAUTHORIZATION,
  EFFECT_BIGIN_TIME_IF_REQUIRE,
  EFFECT_END_TIME_IF_REQUIRE,
  BEGIN_TIME_LOWER_END_TIME,
  CELLPHONE_IS_REQUIRED,
  AVATARURL_IS_REQUIRED,
  EXPIRED,
  USER_ID_IS_REQUIRED,
};

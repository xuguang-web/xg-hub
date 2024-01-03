const dayjs = require("dayjs");
// 比较时间(返回结果为第一个时间和第二个时间比较的boolean值)
compareTime = (time1, time2) => {
  return dayjs(time1).valueOf() < dayjs(time2).valueOf();
};

// 格式化时间
formatTime = (time, Format = "YYYY-MM-DD") => {
  return dayjs(time).format(Format);
};

// 判断时间是否在有效期
validTime = (begin, end) => {
  const time1 = dayjs(end).valueOf() - dayjs(begin).valueOf();
  const time2 = getcurrentTime() - dayjs(begin).valueOf();
  return time1 > time2;
};

getcurrentTime = () => {
  return dayjs().valueOf();
};

module.exports = {
  compareTime,
  formatTime,
  validTime,
};

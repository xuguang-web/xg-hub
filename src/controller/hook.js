const { formatTime } = require("../utils/format.js");

// const handleTimeField = (val) => {
//   return formatTime(val);
// };

const handleUserListData = (data) => {
  const res = [];
  data.forEach((it) => {
    res.push(handleUserDetailData(it));
  });
  return res;
};

const handleUserDetailData = (data) => {
  const result = {
    ...data,
    createTime: formatTime(data?.createTime, "YYYY-MM-DD HH:MM:ss"),
    updateTime: formatTime(data?.updateTime, "YYYY-MM-DD HH:MM:ss"),
    beginTime: formatTime(data?.beginTime),
    endTime: formatTime(data?.endTime),
  };
  return result;
};

module.exports = {
  handleUserDetailData,
  handleUserListData,
};

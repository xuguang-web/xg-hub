const conn = require("../app/database");

class UserService {
  async create(user) {
    const {
      name,
      password,
      cellphone,
      effectBeginTime,
      effectEndTime,
      departmentId,
      avatarUrl,
    } = user;
    const statement =
      "INSERT INTO `users` (name, password,cellphone,effectBeginTime,effectEndTime,departmentId,avatarUrl) VALUES (?,?,?,?,?,?,?);";
    const result = await conn.execute(statement, [
      name,
      password,
      cellphone,
      effectBeginTime,
      effectEndTime,
      departmentId,
      avatarUrl,
    ]);
    return result;
  }

  async update(user) {
    const {
      name,
      cellphone,
      effectBeginTime,
      effectEndTime,
      departmentId,
      avatarUrl,
      id,
    } = user;

    const statement =
      "UPDATE users SET name = ?, cellphone = ?, effectBeginTime = ?, effectEndTime = ?, departmentId = ?, avatarUrl = ? WHERE id = ?;";

    const result = await conn.execute(statement, [
      name,
      cellphone,
      effectBeginTime,
      effectEndTime,
      departmentId,
      avatarUrl,
      id,
    ]);
    return result;
  }

  async list(pageNum, pageSize) {
    const statement = `SELECT u.id id, u.name name, u.createAt createTime, u.updateAt updateTime,u.cellphone phone,u.departmentId departmentId,u.roleId roleId,u.avatarUrl pic,u.effectBeginTime beginTime,u.effectEndTime endTime FROM users u LIMIT ?, ?;`;
    const [result] = await conn.execute(statement, [
      String(pageNum),
      String(pageSize),
    ]);
    return result;
  }

  async detail(id) {
    const statement = `SELECT u.id id, u.name name, u.createAt createTime, u.updateAt updateTime,u.cellphone phone,u.departmentId departmentId,u.roleId roleId,u.avatarUrl pic,u.effectBeginTime beginTime,u.effectEndTime endTime FROM users u WHERE id = ?;`;
    const [result] = await conn.execute(statement, [id]);
    return result;
  }

  async remove(id) {
    const statement = "DELETE FROM users WHERE id = ?;";
    const [result] = await conn.execute(statement, [id]);
    return result;
  }

  async getUserByName(name) {
    const statement = "SELECT * FROM `users` WHERE name = ?;";
    const [result] = await conn.execute(statement, [name]);
    return result;
  }
}

module.exports = new UserService();

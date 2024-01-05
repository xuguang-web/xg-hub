const conn = require("../app/database");

class DepartmentService {
  async getTreeData() {
    const statement = "SELECT * FROM department;";
    const [result] = await conn.execute(statement);
    return result;
  }

  async addTreeData(name, leader, parentId) {
    const statement =
      "INSERT INTO `department` (name,leader,parentId) VALUES (?, ?, ?);";
    const [result] = await conn.execute(statement, [name, leader, parentId]);
    return result;
  }

  async updateTreeData(name, leader, parentId,id) {
    const statement =
    "UPDATE `department` SET name = ?,leader = ? , parentId = ?  WHERE id = ?;";
      const [result] = await conn.execute(statement, [name, leader, parentId,id]);
      return result;
  }
}

module.exports = new DepartmentService();

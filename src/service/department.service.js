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
}

module.exports = new DepartmentService();

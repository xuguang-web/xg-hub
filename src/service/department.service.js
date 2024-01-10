const conn = require("../app/database");

class DepartmentService {
  async getTreeData() {
    const statement = "SELECT * FROM department;";
    const [result] = await conn.execute(statement);
    return result;
  }

  // 传有的字段
  async getDataByField(field, fieldName) {
    const statement = `SELECT * FROM department WHERE ${fieldName} = ?;`;
    const [result] = await conn.execute(statement, [field]);
    return result;
  }

  async addTreeData(name, parentId) {
    const statement = "INSERT INTO `department` (name,parentId) VALUES (?, ?);";
    const [result] = await conn.execute(statement, [name, parentId]);
    return result;
  }

  async updateTreeData(name, parentId, id) {
    const statement =
      "UPDATE `department` SET name = ?, parentId = ?  WHERE id = ?;";
    const [result] = await conn.execute(statement, [name, parentId, id]);
    return result;
  }

  // 删除部门
  async delDepartment(id) {
    const statement = "DELETE FROM department WHERE id = ?;";
    const [result] = await conn.execute(statement, [id]);
    return result;
  }

  async hasChildern(id) {
    const statement = "SELECT * FROM department WHERE parentId = ?;";
    const [result] = await conn.execute(statement, [id]);
    return !!result.length;
  }
}

module.exports = new DepartmentService();

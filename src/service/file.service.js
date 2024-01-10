const conn = require("../app/database");

class FileService {
  async create(id, filename, mimetype, size) {
    const statement = `INSERT INTO file (users_id,filename, mimetype, size) VALUES ( ?,?,?,?);`;
    const [result] = await conn.execute(statement, [
      id,
      filename,
      mimetype,
      size,
    ]);
    return result;
  }

  async getFileByUserId(id) {
    const statement = `SELECT * FROM file WHERE users_id = ?;`;
    const [result] = await conn.execute(statement, [id]);
    return result.pop();
  }
}

module.exports = new FileService();

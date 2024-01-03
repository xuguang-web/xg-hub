const conn = require('../app/database')

class UserService {
  async create(user) {
    const { name, password,cellphone,effectBeginTime,effectEndTime } = user
    const statement = 'INSERT INTO `users` (name, password,cellphone,effectBeginTime,effectEndTime) VALUES (?,?,?,?,?);'
    const result = await conn.execute(statement, [name, password,cellphone,effectBeginTime,effectEndTime])
    return result
  }

  async getUserByName(name) {
    const statement = 'SELECT * FROM `users` WHERE name = ?;'
    const [result] = await conn.execute(statement, [name])
    return result
  }
}

module.exports = new UserService()

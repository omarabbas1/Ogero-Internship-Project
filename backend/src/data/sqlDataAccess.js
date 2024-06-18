const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const DataAccess = require("./dataAccess");
const { mysqlConfig } = require("../config/dbConfig");

class SqlDataAccess extends DataAccess {
  constructor() {
    super();
    this.pool = mysql.createPool(mysqlConfig);
  }

  async createUser(user) {
    const { username, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.execute(
        "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword]
      );
      return rows.insertId;
    } finally {
      connection.release();
    }
  }

  async getUserByEmail(email) {
    const connection = await this.pool.getConnection();
    try {
      const [rows] = await connection.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      return rows[0];
    } finally {
      connection.release();
    }
  }
}

module.exports = SqlDataAccess;

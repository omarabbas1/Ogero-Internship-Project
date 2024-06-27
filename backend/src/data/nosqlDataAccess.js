const { MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");
const DataAccess = require("./dataAccess");
const { mongoConfig } = require("../config/dbConfig");

class NoSqlDataAccess extends DataAccess {
  constructor() {
    super();
    this.client = new MongoClient(mongoConfig.uri);
    this.client.connect();
    this.db = this.client.db(mongoConfig.dbName);
    this.collection = this.db.collection("users");
  }

  async createUser(user) {
    try {
      const { username, email, password } = user;
      const hashedPassword = await bcrypt.hash(password, 10);

      const res = await this.collection.insertOne({
        username,
        email,
        password: hashedPassword,
      });

      return { _id: res.insertedId, username, email };
    } catch (error) {
      console.error("Error in createUser:", error);
      throw error;
    }
  }

  async getUserByEmail(email) {
    const res = await this.collection.findOne({ email });
    return res;
  }
}

module.exports = NoSqlDataAccess;

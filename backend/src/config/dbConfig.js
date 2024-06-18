require("dotenv").config();

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
};

const mongoConfig = {
  uri: process.env.MONGO_URI,
  dbName: process.env.MONGO_DB,
};

module.exports = { mysqlConfig, mongoConfig };

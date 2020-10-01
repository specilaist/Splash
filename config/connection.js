const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'password',
  database: 'splash_db',
}).promise();

module.exports = connection;

const router = require('express').Router();
const connection = require('../../../config/connection');
const { findAllUsers, inserUser } = require('../../../model/userQueries');
const{ fetchUsers } = require('../../../model/userOrm');

router.route('/')
  .get((async (req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
    const query = 'SELECT * FROM users;';
    const [rows] = await connection.query(query);
    console.log('I AM ROWS', rows);
    res.json(rows);
  }))
  .post(async (req, res) => {
    const userInput = req.body;
    const query = 'INSERT INTO users SET username = ?;';
    const result = await connection.query(findAllUsers, inserUser);
    res.json(result);
  });

module.exports = router;

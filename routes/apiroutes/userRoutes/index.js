const router = require('express').Router();
const connection = require('../../../config/connection');

router.route('/')
  .get((async (req, res) => {
    const query = 'SELECT * FROM users;';
    const [rows] = await connection.query(query);
    console.log('I AM ROWS', rows);
    res.json(rows);
  }))
  .post(async (req, res) => {
    const userInput = req.body;
    const query = 'INSERT INTO users SET username = ?;';
    const result = await connection.query(query, userInput);
    res.json(result);
  });

module.exports = router;

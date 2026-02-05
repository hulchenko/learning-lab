const express = require('express');
const app = express();
const mysql = require('mysql');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'restaurant_app',
});

app.get('/api/insert', (req, res) => {
  const sqlInsert =
    'INSERT INTO restaurant_reviews (restaurant_name, restaurant_review) VALUES (?,?);';
  db.query(sqlInsert, [restaurant_name, restaurant_review], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('Done!');
    }
  });
});

app.listen(4000, () => {
  console.log('running on port 4000');
});

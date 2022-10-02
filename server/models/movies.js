var db = require('../db');

module.exports = {
  // how to remove callbacks? ---
  getAll: function (callback) {
    const query = 'SELECT * FROM Movies';
    const queryArgs = [];

    db.connection.query(query, queryArgs, (err, results, fields) => {
      // console.log(results, '---');
      callback(err, results);
    })
  },

  create: function ({text, roomname}, callback) {
    const query = `INSERT INTO Movies (Title, Watched, Added) values (${text}, ${roomname})`
    db.connection.query(query, queryArgs, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(results);
      }
    })
  }
};

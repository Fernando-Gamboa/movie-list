// var models = require('../models');

// module.exports = {
//   get: function (req, res) {
//     let movies = new Promise((resolve, reject) => {
//       models.movies.getAll((err, content) => {
//         if (err) {
//           console.log('error in get', err)
//           reject(err);
//         } else {
//           resolve(content);
//         }
//       })
//     })
//     movies
//       .then((result) => {
//         // console.log('result to send', result);
//         res.send(result)
//       })
//       .catch(err => {
//         res.end();
//       });
//   },

//   post: function (req, res) {
//     console.log(res, '--------------')
//   }
// };

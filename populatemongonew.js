const mongodb = require('mongodb');
const mongoconfig = require('./env/mongoconfig');
const mongo = require('mongodb-bluebird');

module.exports = function(col, data, cb) {
  mongo.connect(mongoconfig.url)
    .then(function(db) { db.collection(col).insert(data)
      .then(function(result) {cb(null, 'result')})
      .catch(function(err) { console.error('.');
    });
  });
};
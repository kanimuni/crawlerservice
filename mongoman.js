const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoconfig = require('./env/mongoconfig');
const mongo = require('mongodb-bluebird');

module.exports = function(data, cb) {
  mongo.connect(mongoconfig.url)
    .then(function(db) { db.collection('news').insert(data)
      .then(function(result) {cb(null, 'result')})
      .catch(function(err) { console.error('.');
    });
  });
};
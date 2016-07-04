const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoconfig = require('./env/mongoconfig');
const mongo = require('mongodb-bluebird');

module.exports = function(cb) {
  mongo.connect(mongoconfig.url).then(function(db) {
    db.collection('newnews').drop()
    .catch(function(err) {
      console.error(err);
    });
  });
  cb(null, 'dropped');
}
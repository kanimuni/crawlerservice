const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoconfig = require('./env/mongoconfig');
const mongo = require('mongodb-bluebird');

const saveToMongo = function(data) {
  mongo.connect(mongoconfig.url).then(function(db) {
    db.collection('news').insert(data)
    .catch(function(err) {
      console.error("OOPS! something went wrong");
    });
  });
}

module.exports = saveToMongo;


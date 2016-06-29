const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoconfig = require('./env/mongoconfig');
const mongo = require('mongodb-bluebird');

const saveToMongo = function(data) {
  mongo.connect(mongoconfig.url).then(function(db) {
    //get the user collection
    var newsdb = db.collection('news');
    return newsdb.find()
    .then(function(news) {
      newsdb.insert(news);
      console.log(news);
    }).catch(function(err) {
        console.error("something went wrong");
    });
  });
}

module.exports = saveToMongo;
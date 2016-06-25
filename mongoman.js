const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const mongoconfig = require('./env/mongoconfig'); 

const saveToMongo = function(data) {
  MongoClient.connect(mongoconfig.url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to tandem-mongo');

      // Get the documents collection
      var collection = db.collection('news');

      collection.insert(data, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log('Inserted documents into the "news" collection. The documents inserted with "_id" are:', result.length, result);
        }
        //Close connection
        db.close();
      });
    }
  });

};

module.exports = saveToMongo;
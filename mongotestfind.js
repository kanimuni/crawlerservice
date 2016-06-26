const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
const mongoconfig = require('./env/mongoconfig'); 


var findNews = function(db, callback) {
   var news =db.collection('news').find({ 'pub_name':'nytimes', 'image_url': 'null'});
   news.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
};

MongoClient.connect(mongoconfig.url, function(err, db) {
  assert.equal(null, err);
  findNews(db, function() {
      db.close();
  });
});
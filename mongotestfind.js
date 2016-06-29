const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
const mongoconfig = require('./env/mongoconfig'); 
const mongo = require('mongodb-bluebird');


// var findNews = function(db, callback) {
//    var news =db.collection('news').find({'title': 'Lebanese Christians hit by double wave of suicide bombings'});
//    news.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          callback();
//       }
//    });
// };

mongo.connect(mongoconfig.url).then(function(db) {
  var newsdb = db.collection('news').find({'pub_name':'bbc'});
  return newsdb
  .then(function(find) {
    console.log(find);
  }).catch(function(err) {
      console.error("something went wrong");
  });
});


// MongoClient.connect(mongoconfig.url, function(err, db) {
//   assert.equal(null, err);
//   findNews(db, function() {
//       db.close();
//   });
// });
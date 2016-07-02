const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
const mongoconfig = require('./env/mongoconfig'); 
const mongo = require('mongodb-bluebird');

mongo.connect(mongoconfig.url).then(function(db) {
  var newsdb = db.collection('news').find({'pub_name':'telegraph'});
  return newsdb
  .then(function(find) {
    console.log(find);
  }).catch(function(err) {
      console.error("oops! something went wrong");
  });
});
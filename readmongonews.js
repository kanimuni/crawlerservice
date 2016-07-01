const mongoconfig = require('./env/mongoconfig');
const mongo = require('mongodb-bluebird');

var mongoNewsRead = function(cb) {
  mongo.connect(mongoconfig.url).then(function(db) {
    var news = db.collection('news');
    news.find()
    .then(function(item) {
      var mongoData = item;
      cb(null, mongoData)
    })
    .catch(function(err) {
      console.log("An error occured in Mongo", err);
    });
  });
};

module.exports = mongoNewsRead;


const crawlerEngine = require('./crawlerengine.js');
const telegraphConfig = require('./crawlconfig/telegraphconfig.js');
const bbcConfig = require('./crawlconfig/bbcconfig.js');
const nprConfig = require('./crawlconfig/nprconfig.js');
const nytimesConfig = require('./crawlconfig/nytimesconfig.js');
const washingtonpostConfig = require('./crawlconfig/washingtonpostconfig.js');
const saveToMongo = require('./mongoman.js');


setInterval(function() {
  crawlerEngine(telegraphConfig, function(err, data) {
    if (err) {
      console.log(err);
    } else {
    saveToMongo(data);
    }
  });
}, 3600000);


setInterval(function() {
  crawlerEngine(bbcConfig, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    saveToMongo(data);
    }
  });
}, 3600000);

setInterval(function() {
  crawlerEngine(nprConfig, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    saveToMongo(data);
    }
  });
}, 3600000);

setInterval(function() {
  crawlerEngine(nytimesConfig, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    saveToMongo(data);
    }
  });
}, 3600000);

setInterval(function() {
  crawlerEngine(washingtonpostConfig, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    saveToMongo(data);
    }
  });
}, 3600000);
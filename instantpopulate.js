const crawlerEngine = require('./crawlerengine.js');
const saveToMongo = require('./mongoman.js');
var async = require('async');
const crawlConfigs = require('./crawlconfig/index.js');

async.each(crawlConfigs, crawlerEngine, function(err, data) {
  if (err) { 
    console.log('An error occured in crawlerEngine', err); 
  } else {
    saveToMongo(data);
  }
});
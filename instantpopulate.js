const crawlerEngine = require('./crawlerengine.js');
const saveToMongo = require('./mongoman.js');
var async = require('async');
const crawlConfigs = require('./crawlconfig/index.js');

// console.log(crawlConfigs.nprconfig);

for (var config in crawlConfigs) {
  // console.log(crawlConfigs[config]);
  crawlerEngine(crawlConfigs[config], function(err, data) {
    if (err) { 
      console.log('An error occured in crawlerEngine', err); 
    } else {
      saveToMongo(data);    
    }
  });
}
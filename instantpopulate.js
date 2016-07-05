var crawlerEngine = require('./crawlerengine.js');
var saveToMongo = require('./mongoman.js');
var async = require('async');
var crawlConfigs = require('./crawlconfig/index.js');
var _ = require('lodash');

var mongopopulate = function(cb) {
  async.each(crawlConfigs, function(keys) {
    crawlerEngine(keys, function(err, crawlData) {
      if (err) { 
        console.log('An error occured in crawlerEngine', err); 
      } else {
        var non_duplicated_url = _.uniqBy(crawlData, 'article_url');
        var non_duplicated_title = _.uniqBy(non_duplicated_url, 'title');
        saveToMongo(non_duplicated_title, cb);
      }
    })
  });
}; 

module.exports = mongopopulate;
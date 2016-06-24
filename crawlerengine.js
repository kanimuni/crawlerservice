var moment = require('moment');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blobArray = [];

var crawlerEngine = function(config, cb) {

  request(config.newsurl, function(error, response, body) {
    if(error) {
      console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);
    $(config.primarySelector).each(function( index ) {
      var title = config.title($(this));
      var link = config.link($(this));
      var image = config.image($(this));
      var summary = config.summary($(this));
      var date = moment().format();

      var blobObj = config.resultObj;
      blobObj.title = title;
      blobObj.article_url = config.articlelinkprefix + link;
      image ? blobObj.image_url = config.imagelinkprefix + image : blobObj.image_url = 'null';
      blobObj.article_date = date;
      summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
      blobArray.push(blobObj);
      
      var jasonBlob = JSON.stringify(blobArray, null, 4);
      cb(null, jasonBlob);
    });
  });
  
};

module.exports = crawlerEngine;
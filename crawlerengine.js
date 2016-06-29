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

    $(config.primarySelector).each(function(index, value) {
      var blobObj = Object.assign({}, config.resultObj);
      var title = config.title($(value));
      var link = config.link($(value));
      var image = config.image($(value));
      var summary = config.summary($(value));
      var date = moment().format();

      blobObj.title = title;
      blobObj.article_url = config.articlelinkprefix + link;
      blobObj.image_url = image ? config.imagelinkprefix + image : 'null';
      blobObj.article_date = date;
      blobObj.article_summary = summary ? summary : 'null'; 

      blobArray.push(blobObj);
    });
    cb(null, blobArray);
  });
};

module.exports = crawlerEngine;
var moment = require('moment');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blobArray = [];

var crawlerEngine = function(config, cb) {

  request(config.newsurl, function(error, response, body) {
    // var blobObj = config.resultObj;
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
      // console.log($(config.primarySelector)[0]);

      blobObj.title = title;
      blobObj.article_url = config.articlelinkprefix + link;
      image ? blobObj.image_url = config.imagelinkprefix + image : blobObj.image_url = 'null';
      blobObj.article_date = date;
      summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
      
      blobArray.push(blobObj);
    });
    // var jasonBlob = JSON.stringify(blobArray, null, 4);
    cb(null, blobArray);
  });
};

module.exports = crawlerEngine;
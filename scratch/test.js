var moment = require('moment');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blobArray = [];

var mainCrawler = function(config, cb) {

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
      var date = config.date($(this));

      var blobObj = config.resultObj;
      blobObj.title = title;
      blobObj.article_url = config.siteurl + link;
      image ? blobObj.image_url = config.siteurl + image : blobObj.image_url = 'null';
      blobObj.article_date = date;
      summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
      blobArray.push(blobObj);
      
      var jasonBlob = JSON.stringify(blobArray, null, 4);
      console.log(jasonBlob);
      cb(null, jasonBlob);
    });
  });
  
};


////////

mainCrawler({
  title: function(body){
    return body.find('h3.list-of-entities__item-body-headline').text().trim();
  },
  link: function(body){
    return body.find('div.list-of-entities__item-link > a').attr('href');
  },
  image: function(body){
    return body.find('div.list-of-entities__item-link > a >img').attr('src');
  },
  summary: function(body){
    return body.find('h3 > a').text().trim();
  },
  date: function(body){
    return moment().format();
  },
  newsurl: "http://www.telegraph.co.uk/news/world/",
  siteurl: "http://www.telegraph.co.uk",
  primarySelector: 'li.list-of-entities__item',
  resultObj: {pub_name:'telegraph', pub_url:'http://www.telegraph.co.uk'}
}, function(err, data){
  console.log(data);
});
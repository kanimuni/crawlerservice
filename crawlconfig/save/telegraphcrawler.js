var moment = require('moment');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blob = [];

request("http://www.telegraph.co.uk/news/world/", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('li.list-of-entities__item').each(function( index ) {
    var title = $(this).find('h3.list-of-entities__item-body-headline').text().trim();
    var link = $(this).find('div.list-of-entities__item-link > a').attr('href');
    var image = $(this).find('div.list-of-entities__item-link > a >img').attr('src');
    var summary = $(this).find('h3 > a').text().trim();
    var date = moment().format();

    var blobObj ={pub_name:'telegraph', pub_url:'http://www.telegraph.co.uk'};
    blobObj.title = title;
    blobObj.article_url = 'http://www.telegraph.co.uk' + link;
    image ? blobObj.image_url = 'http://www.telegraph.co.uk' + image : blobObj.image_url = 'null';
    blobObj.article_date = date;
    summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
    blob.push(blobObj);
    
    var jasonBlob = JSON.stringify(blob, null, 4);
    console.log(jasonBlob);


    // console.log('pub_name: telegraph');
    // console.log('pub_url: http://www.telegraph.co.uk');
    // console.log('title: ', title);
    // console.log('article_url: ', link);
    // console.log('image_url: ', 'http://www.telegraph.co.uk' + image);
    // console.log('article_summary: ', summary);
    // console.log('article_date: ', date);
    // console.log('+++++++++++++++++++++++')

  });
});

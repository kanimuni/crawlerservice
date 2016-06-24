var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blob = [];

request("http://www.npr.org/sections/news", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('article.item.has-image').each(function( index ) {
    var title = $(this).find('h2.title').text().trim();
    var link = $(this).find('h2.title > a').attr('href');
    var image = $(this).find('img').attr('src');
    var summary = $(this).find('p.teaser').text().trim();
    var date = $(this).find('time').attr('datetime');

    var blobObj ={pub_name:'npr', pub_url:'www.npr.org'};
    blobObj.title = title;
    blobObj.article_url = link;
    image ? blobObj.image_url = image : blobObj.image_url = 'null';
    blobObj.article_date = date;
    summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
    blob.push(blobObj);
    
    var jasonBlob = JSON.stringify(blob, null, 4);
    console.log(jasonBlob);


    // console.log('pub_name: npr');
    // console.log('pub_url: www.npr.org');
    // console.log('title: ', title);
    // console.log('article_url: ', link);
    // console.log('image_url: ', image);
    // console.log('article_summary: ', summary);
    // console.log('article_date: ', date);
    // console.log('+++++++++++++++++++++++')

  });
});

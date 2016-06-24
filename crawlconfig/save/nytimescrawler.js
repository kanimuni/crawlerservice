var moment = require('moment');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blob = [];

request("http://www.nytimes.com/pages/todayspaper/index.html?action=Click&module=HPMiniNav&region=TopBar&WT.nav=page&contentCollection=TodaysPaper&pgtype=Homepage", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  $('div.story').each(function( index ) {
    var title = $(this).find('h3').text().trim();
    var link = $(this).find('a').attr('href');
    var image = $(this).find('img').attr('src');
    var summary = $(this).find('p.summary').text().trim();
    var date = moment().format();

    var blobObj ={pub_name:'nytimes', pub_url:'www.nytimes.com'};
    blobObj.title = title;
    blobObj.article_url = link;
    image ? blobObj.image_url = image : blobObj.image_url = 'null';
    blobObj.article_date = date;
    summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
    blob.push(blobObj);
    
    var jasonBlob = JSON.stringify(blob, null, 4);
    console.log(jasonBlob);


    // console.log('pub_name: nytimes');
    // console.log('pub_url: www.nytimes.com');
    // console.log('title: ', title);
    // console.log('article_url: ', link);
    // console.log('image_url: ', image);
    // console.log('article_summary: ', summary);
    // console.log('article_date: ', date);
    // console.log('+++++++++++++++++++++++')

  });
});

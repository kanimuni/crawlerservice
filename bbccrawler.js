var moment = require('moment');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var blob = [];

request("http://www.bbc.com/news", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);
  var myRegexp =/<div class=\"date date--v2\" data-seconds=\"\d+\" data-datetime=\".+\">(.+)<\/div>/i;
  var match = myRegexp.exec(body);
  // console.log(match[1]);
  console.log(match);

  // $('div.faux-block-link').each(function( index ) {
  //   var title = $(this).find('span.title-link__title-text').text().trim();
  //   var summary = $(this).find('[class$=__summary]').text().trim();
  //   var link = $(this).find('a.faux-block-link__overlay-link').attr('href');
  //   var image = $(this).find('img').attr('src');
  //   var date = moment().format();

  //   var blobObj ={pub_name:'bbc', pub_url:'www.bbc.com'};
  //   blobObj.title = title;
  //   blobObj.article_url = 'www.bbc.com' + link;
  //   image ? blobObj.image_url = image : blobObj.image_url = 'null';
  //   blobObj.article_date = date;
  //   summary ? blobObj.article_summary = summary : blobObj.article_summary = 'null';
  //   blob.push(blobObj);
    
  //   var jasonBlob = JSON.stringify(blob, null, 4);
  //   console.log(jasonBlob);


    // console.log('pub_name: bbc');
    // console.log('pub_url: www.bbc.com');
    // console.log('title: ', title);
    // console.log('article_url: ', 'www.bbc.com'+link);
    // console.log('image_url: ', image);
    // console.log('article_summary: ', summary);
    // console.log('article_date: ', match);
    // console.log('------------------------------');
    // fs.appendFileSync('bbc.txt', title + '\n' + summary + '\n' + link + '\n');

  // });
});

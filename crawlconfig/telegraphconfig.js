module.exports = {
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
  articlelinkprefix: "http://www.telegraph.co.uk",
  imagelinkprefix: "http://www.telegraph.co.uk",
  primarySelector: 'li.list-of-entities__item',
  resultObj: {pub_name:'telegraph', pub_url:'http://www.telegraph.co.uk'}
}
module.exports = {
  title: function(body){
    return body.find('h2.title').text().trim();
  },
  link: function(body){
    return body.find('h2.title > a').attr('href');
  },
  image: function(body){
    return body.find('img').attr('src');
  },
  summary: function(body){
    return body.find('p.teaser').text().trim();
  },
  date: function(body){
    return moment().format();
  },
  newsurl: "http://www.npr.org/sections/news",
  articlelinkprefix: '',
  imagelinkprefix: '',
  primarySelector: 'article.item.has-image',
  resultObj: {pub_name:'npr', pub_url:'www.npr.org'}
}
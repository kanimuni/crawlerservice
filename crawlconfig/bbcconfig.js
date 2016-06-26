module.exports = {
  title: function(body){
    return body.find('span.title-link__title-text').text().trim();
  },
  link: function(body){
    return body.find('a.faux-block-link__overlay-link').attr('href');
  },
  image: function(body){
    return body.find('img').attr('src');
  },
  summary: function(body){
    return body.find('[class$=__summary]').text().trim();
  },
  date: function(body){
    return moment().format();
  },
  newsurl: "http://www.bbc.com/news",
  articlelinkprefix: "www.bbc.com",
  imagelinkprefix: "",
  primarySelector: 'div.faux-block-link',
  resultObj: {pub_name:'bbc', pub_url:'www.bbc.com'}
}
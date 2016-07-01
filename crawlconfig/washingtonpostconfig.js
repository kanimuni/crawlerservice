module.exports = {
  title: function(body){
    return body.find('div.headline > a').text().trim();
  },
  link: function(body){
    return body.find('div.photo-wrapper > a').attr('href');
  },
  image: function(body){
    return body.find('div.photo-wrapper > a > img').attr('src');
  },
  summary: function(body){
    return body.find('div.blurb.normal.normal-style').text().trim();
  },
  date: function(body){
    return moment().format();
  },
  newsurl: 'http://www.washingtonpost.com',
  articlelinkprefix: '',
  imagelinkprefix: '',
  primarySelector: 'div.border-bottom-hairline.border-bottom-100-pct',
  resultObj: {pub_name:'washingtonpost', pub_url:'www.washingtonpost.com'}
}
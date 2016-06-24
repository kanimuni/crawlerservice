module.exports = {
  title: function(body){
    return body.find('h3').text().trim();
  },
  link: function(body){
    return body.find('a').attr('href');
  },
  image: function(body){
    return body.find('img').attr('src');
  },
  summary: function(body){
    return body.find('p.summary').text().trim();
  },
  date: function(body){
    return moment().format();
  },
  newsurl: "http://www.nytimes.com/pages/todayspaper/index.html?action=Click&module=HPMiniNav&region=TopBar&WT.nav=page&contentCollection=TodaysPaper&pgtype=Homepage",
  articlelinkprefix: "",
  imagelinkprefix: "",
  primarySelector: 'div.story',
  resultObj: {pub_name:'nytimes', pub_url:'www.nytimes.com'}
}
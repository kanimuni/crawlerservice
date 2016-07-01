var mysql = require('promise-mysql');
var writeFile = require('write');
 
var mysqlGet = function(cb) {
  mysql.createConnection({
      host: 'tandem.c0i1wtzg0ml2.us-west-1.rds.amazonaws.com',
      user: 'tandem',
      password: 'tandemfour',
      database: 'tandem'
  }).then(function(conn){
      // connection = conn;
      return conn.query('select article_url from processed_articles');
  }).then(function(rows) {
      mysqlurls = rows;
      cb(null, mysqlurls);
  }).catch(function(error) {
      console.log('Issue connecting to mysql: ', error);
  });
}; 

module.exports = mysqlGet;
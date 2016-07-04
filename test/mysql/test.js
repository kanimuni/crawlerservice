var assert = require('chai').assert;
var mysql = require('promise-mysql');
var mysqlconfig = require('../../env/mysqlconfig.js');

describe('MySQL', function() {
  describe('#connect()', function () {
    it('should return a PASS when connection to MySQL is succesful', function () {
      mysql.createConnection({
          host: mysqlconfig.host,
          user: mysqlconfig.user,
          password: mysqlconfig.password,
          database: mysqlconfig.database
      }).then(function(conn){
          console.log(conn.config.user);
          assert('tandem' === conn.config.user);
      }).catch(function(error) {
          console.log('Issue connecting to mysql: ', error);
      });
    });
  });
});
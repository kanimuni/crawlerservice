var assert = require('chai').assert;
var mysql = require('promise-mysql');
const mysqlconfig = require('../../env/mysqlconfig');
// var writeFile = require('write');

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


 

  // describe('#find()', function () {
  //   it('should return muni when doing a find on kani', function () {
  //     mongo.connect(mongoconfig.url).then(function(db) {
  //       var test = db.collection('test');
  //       test.find()
  //       .then(function(item) {
  //         var gotdata = item;
  //         // console.log('gotdata ...', gotdata[0].kani);
  //         assert('muni' === gotdata[0].kani);
  //       })
  //       .catch(function(err) { console.error('err');
  //       });
  //     });
  //   });
  // }); 
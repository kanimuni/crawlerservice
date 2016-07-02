var assert = require('chai').assert;
var mongoconfig = require('../env/mongoconfig');
var mongo = require('mongodb-bluebird');

describe('database', function() {
  
  describe('#connect()', function () {
    it('should return a PASS when connection to mongo is succesful', function () {
      assert('object' === typeof(mongo.connect(mongoconfig.url)));
    });
  });

  describe('#find()', function () {
    it('should return muni when doing a find on kani', function () {
      mongo.connect(mongoconfig.url).then(function(db) {
        var test = db.collection('test');
        test.find()
        .then(function(item) {
          var gotdata = item;
          // console.log('gotdata ...', gotdata[0].kani);
          assert('muni' === gotdata[0].kani);
        })
        .catch(function(err) { console.error('err');
        });
      });
    });
  }); 

  describe('#insert()', function () {
    it('should return { ok: 1, n: 1 } when one item is inserted into mongo', function () {
      mongo.connect(mongoconfig.url)
        .then(function(db) { db.collection('test').insert({'kani':'muni'})
        .then(function(result) {
          var check = result.result;
          console.log('this is result.result', result.result);
          console.log('this is check', check);
          assert('{ ok: 1, n: 1 }' === check);
        })
        .catch(function(err) { console.error('err');
        });
      });
    });
  });

});


      

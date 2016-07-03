const assert = require('chai').assert;
const crawlerEngine = require('../../crawlerengine.js');
const crawlConfigs = require('../../crawlconfig/index.js');

describe('Crawlers', function() {
  
  describe('#crawlbbc()', function () {
    it('should return a PASS after succesfully crawling BBC', function () {
      crawlerEngine(crawlConfigs.bbcconfig, function(err, crawlData) {
        if (err) { 
          console.log('An error occured in crawlerEngine', err); 
        } else {
          assert('bbc' === crwalData[0].pub_name);
        }
      });
    });
  });

  describe('#crawlnpr()', function () {
    it('should return a PASS after succesfully crawling NPR', function () {
      crawlerEngine(crawlConfigs.nprconfig, function(err, crawlData) {
        if (err) { 
          console.log('An error occured in crawlerEngine', err); 
        } else {
          assert('npr' === crwalData[0].pub_name);
        }
      });
    });
  });

    describe('#nytimes()', function () {
    it('should return a PASS after succesfully crawling NYTIMES', function () {
      crawlerEngine(crawlConfigs.nytimesconfig, function(err, crawlData) {
        if (err) { 
          console.log('An error occured in crawlerEngine', err); 
        } else {
          assert('nytimes' === crwalData[0].pub_name);
        }
      });
    });
  });

  describe('#telegraph()', function () {
    it('should return a PASS after succesfully crawling TELEGRAPH', function () {
      crawlerEngine(crawlConfigs.telegraphconfig, function(err, crawlData) {
        if (err) { 
          console.log('An error occured in crawlerEngine', err); 
        } else {
          assert('telegraph' === crwalData[0].pub_name);
        }
      });
    });
  });

  describe('#washingtonpost()', function () {
    it('should return a PASS after succesfully crawling WASHINGTONPOST', function () {
      crawlerEngine(crawlConfigs.washingtonpostconfig, function(err, crawlData) {
        if (err) { 
          console.log('An error occured in crawlerEngine', err); 
        } else {
          assert('washingtonpost' === crwalData[0].pub_name);
        }
      });
    });
  });

});
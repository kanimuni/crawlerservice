const assert = require('chai').assert;
const crawlerEngine = require('../../crawlerengine.js');
const crawlConfigs = require('../../crawlconfig/index.js');
const _ = require('lodash');

describe('Crawlers', function() {
  
  describe('#crawlbbc()', function () {
    it('should return a PASS after succesfully crawling BBC', function () {
      crawlerEngine(crawlConfigs.bbcconfig, function(err, crawlData) {
        if (err) { 
          console.log('An error occured in crawlerEngine', err); 
        } else {
          var non_duplicated_url = _.uniqBy(crawlData, 'article_url');
          var non_duplicated_title = _.uniqBy(non_duplicated_url, 'title');
          // console.log(non_duplicated_title[0].pub_name);
          assert('bbc' === non_duplicated_title[0].pub_name);
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
          var non_duplicated_url = _.uniqBy(crawlData, 'article_url');
          var non_duplicated_title = _.uniqBy(non_duplicated_url, 'title');
          // console.log(non_duplicated_title[0].pub_name);
          assert('npr' === non_duplicated_title[0].pub_name);
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
          var non_duplicated_url = _.uniqBy(crawlData, 'article_url');
          var non_duplicated_title = _.uniqBy(non_duplicated_url, 'title');
          // console.log(non_duplicated_title[0].pub_name);
          assert('nytimes' === non_duplicated_title[0].pub_name);
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
          var non_duplicated_url = _.uniqBy(crawlData, 'article_url');
          var non_duplicated_title = _.uniqBy(non_duplicated_url, 'title');
          // console.log(non_duplicated_title[0].pub_name);
          assert('telegraph' === non_duplicated_title[0].pub_name);
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
          var non_duplicated_url = _.uniqBy(crawlData, 'article_url');
          var non_duplicated_title = _.uniqBy(non_duplicated_url, 'title');
          // console.log(non_duplicated_title[0].pub_name);
          assert('washingtonpost' === non_duplicated_title[0].pub_name);
        }
      });
    });
  });

});
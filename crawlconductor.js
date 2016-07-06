// const crawlerEngine = require('./crawlerengine.js');
// const saveToMongo = require('./mongoman.js');
// const crawlConfigs = require('./crawlconfig/index.js'); //object full of crawlerMethods
const dropmongonews = require('./mongonewsdrop.js');
const dropmongonewnews = require('./mongonewnewsdrop.js');
const populateMongo = require('./populatemongonew.js');
const mongopopulate = require('./instantpopulate.js');
const mysqlGet = require('./mysqlread.js');
const mongoNewsRead = require('./readmongonews.js')
const async = require('async');
const _ = require('lodash');
var mData;
var sData;

var removeDups = function(arr1, arr2) {
  _.forEach(arr2, function(value, key) {
    if(_.findIndex( arr1, {'article_url': value.article_url}) !== -1) {
      arr1.splice( _.findIndex( arr1, {'article_url': value.article_url} ), 1 )
    }
  });
};


async.series([
  // drop mongo news
  function(callback) {
    console.log('=============================================================');
    console.log('ONE: Drop mongo collection NEWS like a hot potato ...');
    dropmongonews(function(err, result) {
      if(err) {
        console.log(err);
      } else {
        callback(null, 'mongo news dropped!');
      }
    });
  },
  // read mysql
  function(callback) {
    console.log('=============================================================');
    console.log('TWO: Reading mysql database ....')
    mysqlGet(function(err, mysqldata) {
      if(err) {
        console.log(err)
      } else {
        sData = mysqldata;
        console.log('sData length ..... ', sData.length)
        console.log('sData ..... ', sData)
        callback(null, 'got from mysql: ' + sData.length);
      }
    });
  },
  // crawl, scrape and populate mongo
  function(callback) {
    console.log('=============================================================');
    console.log('THREE: Crawling, scraping and populating mongo ...')
    mongopopulate(function(err, result) {
      callback(null, 'cralwers done and mongo updated!')
    });
  },
  // read mongo news
  function(callback){
    console.log('=============================================================');
    console.log('FOUR: Reading mongodb ....')
    mongoNewsRead(function(err, mongodata){
      if(err) {
        console.log(err);
      } else {
        mData = mongodata;
        console.log('mData length ..... ', mData.length);
        console.log('mData ..... ', mData);        
        callback(null, 'got from mongo: ' + mData.length);
      }
    });
  },
  function(callback) {
    console.log('=============================================================');
    console.log('FIVE: Diffing the data between mongo and mysql ...');
    removeDups(mData, sData);
    console.log('mData length after diff ..... ', mData.length);
    console.log('mData after diff ..... ', mData);  
    callback(null, 'diff mongo and mysql to new articles :' + mData.length);
  },

  function(callback) {
    console.log('=============================================================');
    console.log('SIX: Drop mongo collection NEW-NEWS like a hot potato ...');
    dropmongonewnews(function(err, result) {
      if(err) {
        console.log(err);
      } else {
        callback(null, 'mongo new news dropped');
      }
    });
  },

  function(callback) {
    console.log('=============================================================');
    console.log('SEVEN: Populate mongo new ...');
    populateMongo('newnews', mData, function(err, result) {
      callback(null, 'newnews updated with : ' + mData.length);
    });
  }
],
// optional callback
  function(err, results) {
    if(err) {
      console.log(err);
    } else {
      console.log(results);
      console.log('END: The Symphony is now complete!!');
    }
  }
);
const crawlerEngine = require('./crawlerengine.js');
const telegraphConfig = require('./crawlconfig/telegraphconfig.js');
// const bbcConfig = require('./crawlconfig/bbcconfig.js');
// const nprConfig = require('./crawlconfig/nprconfig.js');
// const nytimesConfig = require('./crawlconfig/nytimesconfig.js');
// const washingtonpostConfig = require('./crawlconfig/washingtonpostconfig.js');
const mongoman = require('./mongoman.js');


crawlerEngine(telegraphConfig, function(err, data) {
  console.log(data);
  // mongoman(data);
});

// crawlerEngine(bbcConfig, function(err, data){
//   console.log(data);
// });

// crawlerEngine(nprConfig, function(err, data){
//   console.log(data);
// });

// crawlerEngine(nytimesConfig, function(err, data){
//   console.log(data);
// });

// crawlerEngine(washingtonpostConfig, function(err, data){
//   console.log(data);
// });
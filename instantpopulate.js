const crawlerEngine = require('./crawlerengine.js');
const saveToMongo = require('./mongoman.js');
var async = require('async');
const crawlConfigs = require('./crawlconfig/index.js');

// console.log(crawlConfigs.nprconfig);

for (var config in crawlConfigs) {
  // console.log(crawlConfigs[config]);
  crawlerEngine(crawlConfigs[config], function(err, data) {
    if (err) { 
      console.log('An error occured in crawlerEngine', err); 
    } else {
      console.log('===============');
      console.log('Spitting out scraped data ...!!!');
      console.log(data);
      console.log('===============');
      saveToMongo(data);    
    }
  });
}


// for (var config in crawlConfigs) {
//   crawlerEngine(crawlConfigs[config], function(err, data) {
//     if (err) { 
//       console.log('An error occured in crawlerEngine', err); 
//     } else {
//       console.log('===============');
//       console.log('Spitting out scraped data ...!!! ', data[0]);
//       console.log('===============');
//       // saveToMongo(data);    
//     }
//   });
// };

// (crawlConfigs, crawlerEngine, function(err, data) {
//   if (err) { 
//     console.log('An error occured in crawlerEngine', err); 
//   } else {
//     console.log('Spitting out scraped data ...!!! ', data);
//     saveToMongo(data);
//   }
// });
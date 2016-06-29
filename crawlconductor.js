const crawlerEngine = require('./crawlerengine.js');
const saveToMongo = require('./mongoman.js');
const crawlConfigs = require('./crawlconfig/index.js'); //object full of crawlerMethods
for(var siteName in crawlConfigs){

  setInterval(function() {
    crawlerEngine(crawlConfigs[siteName], function(err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log('set intervl is doing its thing');
        saveToMongo(data);
      }
    });
  }, 3600000); // 1 hour
}

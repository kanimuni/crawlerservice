const crawlerEngine = require('./crawlerengine.js');
const saveToMongo = require('./mongoman.js');

//Could be very nicely written as follows:
const crawlConfigs = require('./crawlconfig.index.js'); //object full of crawlerMethods

for(var siteName in crawlConfigs){

  setInterval(function() {
    crawlerEngine(crawlConfigs[siteName], function(err, data) {
      if (err) {
        console.log(err);
      } else {
        saveToMongo(data); //ideally, write this with a callback, and then log
                           //success, time, siteName, and anything else useful.
                           //Of course you know I'd recommend Promises, but I
                           //wont pester you with that here :)
      }
    });
  }, 3600000); // 1 hour (polite to say, so save you the maths in your head)

}

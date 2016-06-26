const fs = require('fs');
var crawlerConfigs = {};

fs.readdirSync(__dirname).forEach(function(fileName){

  if(fileName !== 'index.js'){

    const moduleName = fileName.slice(0, fileName.indexOf('.js') -1);
    crawlerConfigs[moduleName] = require(__dirname + '/' + fileName);

  }

});

module.exports = crawlerConfigs;

/*
- You don't have to do this, but I think it's nice to have a little
index like that that automatically loads up all your crawlerConfigs.
This way, if you add more configs later, you don't need to write or
keep track of anything. They're loaded up automatically.

- Have a look at crawlConductor.js to see how you now only have to
require one module.

- This fs.readdirSync loop is a very common pattern in Node, so its
good to know :)

- With respect to file naming:
  - Always think DRY (don't repeat yourself). Just name them 'bbc',
  'npr', 'nyTimes', 'telegraph' etc.
  - If you do use two words, camel case! e.g., wachingtonPost

Also! This little refactor is SUPER easy for me, which is a sign
that you've written this all rather well! Good stuff!
*/

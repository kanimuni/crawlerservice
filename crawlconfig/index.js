const fs = require('fs');
var crawlerConfigs = {};

fs.readdirSync(__dirname).forEach(function(fileName) {
  if(fileName !== 'index.js' && fileName !== '.DS_Store'){
    const moduleName = fileName.slice(0, fileName.indexOf('.js'));
    crawlerConfigs[moduleName] = require(__dirname + '/' + fileName);
  }

});

module.exports = crawlerConfigs;
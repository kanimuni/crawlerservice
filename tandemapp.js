var crawlman = require('./crawlman.js');
var schedule = require('node-schedule');
var testjobschedule = schedule.scheduleJob('*/1 * * * *', function() {
  crawlman();
});
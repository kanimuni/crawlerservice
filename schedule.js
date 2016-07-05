var schedule = require('node-schedule');
 
var testjobschedule = schedule.scheduleJob('02 * * * *', function(){
  console.log('Test sheduler!');
});
const async = require('async');
const _ = require('lodash');

var mongoData = [
  { "_id" : "ObjectId(57759622f843dbf104e2098c)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "No trade talks until full Brexit - EU", "article_url" : "www.bbc.com/news/uk-politics-eu-referendum-36678222", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e2098d)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Iran sacks bank chiefs over high pay", "article_url" : "www.bbc.com/news/world-middle-east-36676756", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e2098e)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Futurologist guru Alvin Toffler dies", "article_url" : "www.bbc.com/news/world-us-canada-36670572", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e2098f)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Poland v Portugal goes to penalties", "article_url" : "www.bbc.com/sport/live/football/35980216", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e20990)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Argentina ex-leader's properties searched", "article_url" : "www.bbc.com/news/world-latin-america-36679178", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e20991)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Vigilante father's war on heroin", "article_url" : "www.bbc.comhttp://www.bbc.co.uk/news/world-us-canada-36602368", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e20992)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Inside the mind of white America", "article_url" : "www.bbc.comhttp://www.bbc.co.uk/news/world-us-canada-36551938", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" },
  { "_id" : "ObjectId(57759622f843dbf104e20993)", "pub_name" : "bbc", "pub_url" : "www.bbc.com", "title" : "Mother's fight to keep her baby", "article_url" : "www.bbc.comhttp://www.bbc.com/news/video_and_audio/features/world-us-canada-36543406/36543411", "image_url" : "null", "article_date" : "2016-06-30T14:58:57-07:00", "article_summary" : "null" }
]

// var mysqlData = [{ article_url: 'www.bbc.com/sport/live/football/35980216' }, {article_url: 'www.bbc.comhttp://www.bbc.co.uk/news/world-us-canada-36551938'}, { article_url: 'www.bbc.com/news/uk-politics-eu-referendum-36678222' }];
var mysqlData = [{ article_url: 'www.bbc.com/sport/live/football' }, {article_url: 'www.bbc.comhttp://www.bbc.co.uk/news/world-us-canada'}, { article_url: 'www.bbc.com/news/uk-politics-eu-referendum' }];



console.log( _.findIndex( mongoData, {'article_url': 'www.bbc.comhttp://www.bbc.com/news/video_and'} ) );
console.log( _.findIndex( mongoData, { article_url: 'www.bbc.com/news/uk-politics-eu-referendum-36678222'} ) );
// console.log( _.findIndex(mongoData, {'article_url':'www.bbc.com/news/world-us-canada-36670572'}) );

// var resultArray = [];
// console.log('mongoData length before ......', mongoData.length);
// console.log('mongoData before ......', mongoData);

// var removeDups = function(arr1, arr2) {
//   _.forEach(arr2, function(value, key) {
//     arr1.splice( _.findIndex( arr1, {'article_url': value.article_url} ), 1 )
//   });
// };

// removeDups(mongoData, mysqlData);
// console.log('mongoData length after ......', mongoData.length);
// console.log('mongoData after ......', mongoData);


// myArray.splice(_.findIndex(myArray, function(item) {
//     return item.value === 'money';
// }), 1);

// _.forEach(mysqlData, function(value, key) {
//   return value.article_url;
// })

// var resultArray = [];

// console.log('resultArray before ......', resultArray);

// var removeDups = function(arr1, arr2) {
//   _.forEach(arr2, function(value, key) {
//     resultArray = resultArray.concat( _.reject(arr1, {'article_url': value.article_url}) );
//   });
//   resultArray = _.uniqBy(resultArray, 'article_url');
// };

// removeDups(mongoData, mysqlData);
// console.log('resultArray after ......', resultArray);


// mongoData.splice(_.findIndex(mongoData, function(item) {
//     return item.value === 'money';
// }), 1);




// console.log('resultArray after ......', resultArray);

// _.filter(mongoData, mysqlData[0].article_url);
// console.log( _.filter(mongoData, {'article_url': 'www.bbc.com/sport/live/football/35980216'}) );
// console.log( _.reject(mongoData, {'article_url': 'www.bbc.com/sport/live/football/35980216'}) );
// console.log( _.filter(mongoData, {'article_url': mysqlData[0].article_url}) );
// resultArray = resultArray.concat( _.reject(mongoData, {'article_url': mysqlData[1].article_url}) );
// console.log(resultArray);
// console.log( _.filter(mongoData, {'article_url': mysqlData[0].article_url}) );

// console.log(mysqlData[0].article_url);


// _.filter(mongoData, function(mysqlData) {
//   for (var i=0; i<mysqlData; i++) {

//   }
// });




// _.filter(mongoData, _.matches({ 'age': 40, 'active': false }));
// // → [{ 'user': 'fred', 'age': 40, 'active': false }]

//   _.matches({ 'age': 40, 'active': false }));
// // → [{ 'user': 'fred', 'age': 40, 'active': false }]


// var users = [
//   { 'user': 'barney', 'age': 36, 'active': true },
//   { 'user': 'fred',   'age': 40, 'active': false }
// ];

// _.filter(users, function(o) { return !o.active; });
// // → objects for ['fred']

// // The `_.matches` iteratee shorthand.
// _.filter(users, { 'age': 36, 'active': true });
// // → objects for ['barney']

// // The `_.matchesProperty` iteratee shorthand.
// _.filter(users, ['active', false]);
// // → objects for ['fred']

// // The `_.property` iteratee shorthand.
// _.filter(users, 'active');
// // → objects for ['barney']




// async.series([
//     function(callback){
//         // do some stuff ...
//         callback(null, 'one');
//     },
//     function(callback){
//         // do some more stuff ...
//         callback(null, 'two');
//     }
// ],
// // optional callback
// function(err, results){
//     // results is now equal to ['one', 'two']
// });

// var users = [
//   { 'user': 'barney', 'age': 36, 'active': false },
//   { 'user': 'fred',   'age': 40, 'active': true }
// ];

// _.reject(users, function(o) { return !o.active; });
// // → objects for ['fred']

// The `_.matches` iteratee shorthand.
// console.log( _.reject(users, { 'age': 40, 'active': true }) );
// → objects for ['barney']

var path = require('path');
var app = require(path.resolve(__dirname, '../server'));
var dataSource = app.dataSources.mysql;


dataSource.automigrate('AccessToken', function(err) {
  if (err) console.log(err);
});
dataSource.automigrate('User', function(err) {
  if (err) console.log(err);
});
dataSource.automigrate('group', function(err) {
  if (err) console.log(err);
});
dataSource.automigrate('contact', function(err) {
  if (err) console.log(err);
});

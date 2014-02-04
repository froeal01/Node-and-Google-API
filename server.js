var connect = require('connect')
  , http = require('http')
  , app
  ;

app = connect()
  .use(connect.static('app'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/node_modules', connect.static('node_modules'))
  ;

http.createServer(app).listen(5050, function() {
  console.log('No Errors');
});
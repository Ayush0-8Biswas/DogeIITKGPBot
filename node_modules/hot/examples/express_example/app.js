/**
 * Module dependencies.
 */
console.log(__dirname);
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , hot = require("hot")
  , cons = require('./consolidate');

var app = express();
/* hot custom */
hot.templateSettings.strip = false;
hot.helpers.sum = function(a){
    a = a||[];
    return a.reduce(function(a, b) { return a + b; }, 0);
};
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('hot', cons.hot);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

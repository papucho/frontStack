var gutil = require('gulp-util');
var http = require('http');
var express = require('express')

function startHttpServer(){
  var port = process.env.PORT || 3000;
  var folder = '/../public';
  var app = express();

  app.use(express.static(__dirname + folder));

  app.get('/[^\.]+$', function(req, res){
      res.set('Content-Type', 'text/html')
          .sendfile(__dirname + folder + '/index.html');
  });

  app.listen(port);
  gutil.log('Webserver running on port ' + port);
};

module.exports = function(gulp){
  gulp.task('build-server', startHttpServer);
}

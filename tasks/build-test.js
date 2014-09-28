var karma = require('karma').server;

module.exports = function(gulp, files){
  gulp.task('build-test', function (done) {
    karma.start({
      configFile: __dirname + '/../karma.conf.js'
    }, done);
  });
}

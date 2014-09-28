var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var gutil = require('gulp-util');

module.exports = function(gulp, files){
  gulp.task('build-javascript', function() {
    return gulp.src(files)
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(ngAnnotate())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('public/js'));
  });
}


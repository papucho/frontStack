var sass = require('gulp-ruby-sass');
var prefix = require('gulp-autoprefixer');
var gutil = require('gulp-util');

module.exports = function(gulp, files){
  gulp.task('build-css', function(){
    sassOptions = {
      style: 'compressed'
    }

    return gulp.src(files)
      .pipe(sass(sassOptions).on('error', gutil.log))
      .pipe(prefix("last 2 version", "> 1%", "ie 8", "ie 7"))
      .pipe(gulp.dest('public/css'))
  });
}


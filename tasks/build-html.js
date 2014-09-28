var jade = require('gulp-jade');

module.exports = function(gulp, files){
  gulp.task('build-html', function(){
    return gulp.src(files)
      .pipe(jade())
      .pipe(gulp.dest('public/'))
  });
}

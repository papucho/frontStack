module.exports = function(gulp,files){
  gulp.task('build-images', function() {
    return gulp.src(files)
      .pipe(gulp.dest('../public/img'));
  });
}

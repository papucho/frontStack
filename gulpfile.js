var gulp = require('gulp');

var files = {
  sass: ['app/css/**/*.scss','app/css/**/*.sass', 'app/css/*/*.sass'],
  jade: ['!app/html/**/_*.jade', 'app/html/**/*.jade'],
  javascript: ['app/javascript/**/*.js'],
  images: ['app/images/**']
}

require('./tasks/build-server')(gulp);
require('./tasks/build-test')(gulp);
require('./tasks/build-images')(gulp);
require('./tasks/build-javascript')(gulp, files.javascript);
require('./tasks/build-css')(gulp, files.sass);
require('./tasks/build-html')(gulp, files.jade);
require('./tasks/build-images')(gulp, files.images);

gulp.task('watch', ['build-server'], function(){
  gulp.watch(files.javascript, ['build-javascript']);
  gulp.watch(files.sass, ['build-css']);
  gulp.watch(files.jade, ['build-html']);
  gulp.watch(files.test, ['build-test']);
});

gulp.task('default', ['build-javascript', 'build-css']);

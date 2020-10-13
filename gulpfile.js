let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
  .pipe(sass()) // compile SCSS to CSS
  .pipe(gulp.dest('dist')); // put final CSS in dist folder
});

gulp.task('watch', function(){
  gulp.watch('app/scss/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));

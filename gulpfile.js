const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['sass'])
});

gulp.task('default', ['watch']);


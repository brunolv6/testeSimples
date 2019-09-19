const gulp = require('gulp');
// Requires the gulp-sass plugin
const sass = require('gulp-sass');
/* const watchSass = require('gulp-watch-sass') */

gulp.task('sass', function(){
  return gulp.src('app/sass/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});
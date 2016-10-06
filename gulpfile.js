const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const jasmine = require('gulp-jasmine');

gulp.task('test', function() {
  gulp.src(['spec/*.js']).pipe(jasmine());
});

gulp.task('default', ['test']);

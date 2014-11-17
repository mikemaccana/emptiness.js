// Run 'gulp' to do the important stuff
var gulp = require('gulp'),
  prefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  livereload = require('gulp-livereload'),
  jshint = require('gulp-jshint'),
  connect = require('gulp-connect');

var path = require('path');

gulp.task('sass', function () {
  gulp
    .src('./scss/style.scss')
    .pipe(sass({
      paths: ['scss']
    }))
    .pipe(prefixer('last 2 versions', 'ie 9'))
    .pipe(gulp.dest('./css'))
    .pipe( connect.reload() );
});

// The default task (called when you run `gulp`)
gulp.task('default', function() {
  gulp.run('sass');

  // Watch files and run tasks if they change
  gulp.watch('./scss/*.scss', function(event) {
    gulp.run('sass');
  });

  connect.server({
    // root: ['_public'],
    port: 4242,
    livereload: true
  });
});


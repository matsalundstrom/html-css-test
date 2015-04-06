var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var rimraf = require('rimraf');
var livereload = require('gulp-livereload');

gulp.task('jshint', function() {
    'use strict';
    gulp.src('./src/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(gulp.dest('./dist/assets/js'));
});


gulp.task('sass', function () {
    gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});

gulp.task('html', function() {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('src/*.html', ['html']);

    // Watch .scss files
    gulp.watch('src/styles/**/*.scss', ['sass']);

    // Watch .js files
    gulp.watch('src/scripts/**/*.js', ['jshint']);

    livereload.listen();

    gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('default', function() {

});

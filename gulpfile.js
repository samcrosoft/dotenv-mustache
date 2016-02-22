/**
 * Created by Adebola on 04/02/2016.
 */
// assign the module to a local variable
var del = require('del');
var gulp = require('gulp');
var babel = require("gulp-babel");
var rename = require('gulp-rename');
var header = require('gulp-header');

var onError = function (err) {
    console.log(err);
};

/*
 * Variables
 */
var distDir = './dist';
// using data from package.json
var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

// Clear
gulp.task('clear', function () {
    del.sync([distDir]);
});


// Javascript
gulp.task('js', function () {
    gulp.src('./src/**/*.js')
        .pipe(babel()).on('error', onError)
        .pipe(header(banner, {pkg: pkg}))       // add header banner

        // Original
        //.pipe(rename({basename: 'index'}))
        .pipe(gulp.dest(distDir))
});

// Watch
gulp.task('watch', ['js'], function() {
    gulp.watch('./src/**/*', ['js']);
});

// Defaults
gulp.task('build', ['js']);
gulp.task('default', ['build']);
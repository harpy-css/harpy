var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var size = require('gulp-size');
var gzip = require('gulp-gzip');
var notify = require("gulp-notify");
var uncss = require('gulp-uncss');
var sourcemaps = require('gulp-sourcemaps');
var include = require('gulp-include');
var hb = require('gulp-hb');
var css = require('css');
var fs = require('fs');
var through = require('through2');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {
	browserSync.init({
		server: "./dist"
	});
	gulp.watch("dist/**/*.{html,js,css}").on('change', browserSync.reload);
});

// JS
gulp.task('html', function() {
	return gulp.src('src/**/*.html').pipe(gulp.dest('dist/'));
});

// JS
gulp.task('js', function() {
	return gulp.src('src/js/main.js')
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(sourcemaps.init())
		.pipe(include())
		.pipe(uglify({
				preserveComments: 'some'
		}))
		.pipe(sourcemaps.write('../maps'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/js/'));
});

// SCSS
gulp.task('css', function() {
	return gulp.src('src/scss/harpy.scss')
	// error handling
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(sass({ style: 'expanded' }))
	.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	.pipe(gulp.dest('dist/css'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('dist/css'))

	.pipe(notify("SCSS minified"));
});

// Watch
gulp.task('watch', function() {
	gulp.watch('src/scss/**/*.scss', ['css']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/**/*.html', ['html']);
});

// Defaults
gulp.task('no-server', ['css', 'js', 'watch'], function() {});

// Defaults
gulp.task('default', ['serve', 'css', 'js', 'html', 'watch'], function() {});

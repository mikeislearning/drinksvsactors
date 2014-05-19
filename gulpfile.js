var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var open = require('open');
var compass = require('gulp-compass');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');


// Load plugins
var $ = require('gulp-load-plugins')();

var paths = {
  sass: './source/scss/**/*.scss',
  css: './www/css',
  coffee: './source/coffee/**/*.coffee',
  js: './www/js/'
};

gulp.task('sass', function(done) {
  gulp.src(paths.sass)
    .pipe(sass({
    	errLogToConsole: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.css))
    .on('end', done);
});

gulp.task('coffee', function() {
  gulp.src(paths.coffee)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(paths.js))
});


// Connect
gulp.task('connect', $.connect.server({
    root: ['www'],
    port: 9000,
    livereload: true
}));

// Open
gulp.task('serve', ['connect', 'sass'], function() {
  open("http://localhost:9000");
});

gulp.task['continue',[]]


gulp.task('watch',['connect', 'serve'], function() {

	gulp.watch(paths.sass, ['sass']);
	gulp.watch(paths.coffee, ['coffee'])

	gulp.watch([
	    './www/**/*.html',
	    './www/css/*.css',
	    './www/js/**/*.js'
	], function (event) {
	    return gulp.src(event.path)
	        .pipe($.connect.reload());
	});

});

gulp.task('default', ['watch']);

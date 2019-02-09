var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
    return gulp.src('docs/scss/*.scss')
        .pipe(sass().on('error', function(err) {
            console.error(err.message);
            browserSync.notify(err.message, 3000); // Display error in the browser
            this.emit('end'); // Prevent gulp from catching the error and exiting the watch process
        }))
        .pipe(sass())
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: 'docs'
        },
    })
});

gulp.task('copy', function() {
    return gulp.src(
        ['docs/**/*.js',
        'docs/**/*.{jpg,jpeg,png,svg,gif}',
        'docs/**/*.css',
        '!docs/**/*.scss',
        'docs/**/*.html',
        'docs/**/*.php'])
        .pipe(gulp.dest('dist'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

// gulp watch functions
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('docs/**/*.scss', ['sass']);
    gulp.watch('docs/**/*.{css,scss}', browserSync.reload);
    gulp.watch('docs/**/*.html', browserSync.reload);
    gulp.watch('docs/**/*.php', browserSync.reload);
    gulp.watch('docs/**/*.js', browserSync.reload);
    // Other gulp watchers
});

// run gulp build to create production ready site
gulp.task('default', function(callback) {
    runSequence('clean:dist',
    ['sass', 'copy'],
    callback)
});

// run gulp serve to deploy to server for automatic sass compilation and reloading
gulp.task('serve', function (callback) {
    runSequence(
        ['sass', 'browserSync', 'watch'],
         callback
    );
});
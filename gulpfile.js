'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    jsdoc2md = require('gulp-jsdoc-to-markdown'),
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    Gitdown = require('gitdown'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    del = require('del');

gulp.task('clean', function(callback) {
    del(['./coverage'], callback);
});

gulp.task('lint', function() {
    return gulp.src([
        'index.js',
        './lib/**/*.js',
        './samples/**/*.js',
        './test/**/*.spec.js',
        'gulpfile.js'
    ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('jsdoc2md', function() {
    return gulp.src([
        './index.js',
        './lib/**/*.js'
    ])
    .pipe(concat('API.md'))
    .pipe(jsdoc2md())
    .pipe(gulp.dest('.gitdown/docs'));
});

gulp.task('gitdown:readme', function() {
    return Gitdown.read('.gitdown/README.md').write('README.md');
});

gulp.task('gitdown:api', function() {
    var gitdown = Gitdown.read('.gitdown/docs/API.md');

    gitdown.config.headingNesting.enabled = false;

    return gitdown.write('docs/API.md');
});

gulp.task('gitdown', function(callback) {
    runSequence('gitdown:readme', 'gitdown:api', function() {
        callback();
    });
});

gulp.task('docs', function(callback) {
    runSequence('jsdoc2md', 'gitdown', function() {
        callback();
    });
});

gulp.task('build', function(callback) {
    runSequence('clean', 'lint', 'docs', 'test', function() {
        callback();
    });
});

gulp.task('ci', function(callback) {
    runSequence('clean', 'lint', 'test', function() {
        callback();
    });
});

gulp.task('test', function(callback) {
    gulp.src(['./index.js', './lib/*.js'])
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src('./test/**/*.spec.js')
                .pipe(mocha())
                .pipe(istanbul.writeReports())
                .on('end', callback);
        });
});

gulp.task('default', function(callback) {
    runSequence('build', function() {
        callback();
    });
});

'use strict';

var path = require('path'),
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    jsdoc2md = require('gulp-jsdoc-to-markdown'),
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    Gitdown = require('gitdown');

var src = './lib/',
    paths = {
        scripts: [
            'index.js',
            path.join(src, '**/*.js'),
            path.join('./samples', '**/*.js'),
            'gulpfile.js'
        ]
    };

gulp.task('lint', function() {
    return gulp.src(paths.scripts)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());
});

gulp.task('jsdoc2md', function() {
    return gulp.src([
            './index.js',
            path.join(src, '**/*.js')
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
    runSequence('gitdown:readme', 'gitdown:api', callback);
});

gulp.task('docs', function(callback) {
    runSequence('jsdoc2md', 'gitdown', callback);
});

gulp.task('build', function(callback) {
    runSequence('lint', 'docs', callback);
});

gulp.task('ci', function(callback) {
    runSequence('lint', callback);
});

gulp.task('default', function(callback) {
    runSequence('build', callback);
});

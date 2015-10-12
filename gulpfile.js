'use strict';

var gulp = require('gulp'),
    jsdoc2md = require('gulp-jsdoc-to-markdown'),
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    Gitdown = require('gitdown');

gulp.task('docs-api', function() {
    return gulp.src([
        './index.js',
        './lib/**/*.js'
    ])
    .pipe(concat('API.md'))
    .pipe(jsdoc2md())
    .pipe(gulp.dest('docs'));
});

gulp.task('docs-readme', function() {
    return Gitdown.read('.gitdown/README.md').write('README.md');
});

gulp.task('docs', function(callback) {
    runSequence('docs-readme', 'docs-api', function() {
        callback();
    });
});

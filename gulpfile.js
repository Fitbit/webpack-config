'use strict';

var path = require('path'),
    del = require('del'),
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    jsdoc2md = require('gulp-jsdoc-to-markdown'),
    concat = require('gulp-concat');

var src = './lib/',
    docs = './docs/',
    paths = {
        scripts: path.join(src, '**/*.js')
    };

gulp.task('lint', function() {
    return gulp.src([paths.scripts, 'gulpfile.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('clean', function(callback) {
    del(path.join(docs, 'API.md'), callback);
});

gulp.task('docs', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('API.md'))
        .pipe(jsdoc2md())
        .pipe(gulp.dest(docs));
});

gulp.task('build', ['lint'], function() {
    gulp.start('docs');
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});

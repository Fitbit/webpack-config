'use strict';

var path = require('path'),
    del = require('del'),
    gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    jsdoc2md = require('gulp-jsdoc-to-markdown'),
    concat = require('gulp-concat'),
    gitdown = require('gitdown');

var src = './lib/',
    docs = './docs/',
    paths = {
        scripts: [
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

gulp.task('clean', function(callback) {
    del(path.join(docs, 'API.md'), callback);
});

gulp.task('docs', ['jsdoc2md'], function() {
    gulp.start('gitdown');
});

gulp.task('jsdoc2md', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('API.md'))
        .pipe(jsdoc2md())
        .pipe(gulp.dest(docs));
});

gulp.task('gitdown', function() {
    return gitdown.read('.gitdown/README.md').write('README.md');
});

gulp.task('build', ['lint'], function() {
    gulp.start('docs');
});

gulp.task('default', ['clean'], function() {
    gulp.start('build');
});

'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config');

describe('ConfigDefaultsMixin', function () {
    context('#defaults()', function() {
        it('should add missing "options"', function() {
            var config = new Config(),
                date1 = new Date(),
                date2 = new Date();

            config.merge({
                foo: 'foo1',
                date: date1
            }).defaults({
                foo: 'foo2',
                bar: ['bar2'],
                date: date2
            });

            expect(config.toObject()).to.eql({
                foo: 'foo1',
                bar: ['bar2'],
                date: date1
            });
        });
    });
});

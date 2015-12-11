'use strict';

var Config = require('../lib/config');

describe('ConfigDefaultsMixin', function () {
    describe('#defaults()', function() {
        it('should add missing `options`', function() {
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
            }, function() {
                expect(this).toBe(config);

                return {
                    foo: 'foo2'
                };
            });

            expect(config.toObject()).toEqual({
                foo: 'foo1',
                bar: ['bar2'],
                date: date1
            });
        });
    });
});

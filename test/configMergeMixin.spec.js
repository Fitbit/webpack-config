'use strict';

var Config = require('../lib/config');

describe('ConfigMergeMixin', function () {
    describe('#merge()', function() {
        it('should merge `options`', function() {
            var config = new Config();

            config.merge({
                foo: {
                    bar: 'bar1'
                },
                bar: ['bar1']
            }, {
                foo: {
                    bar: 'bar2'
                },
                bar: ['bar2']
            }, function() {
                expect(this).toBe(config);

                return {
                    foo: {
                        bar: 'bar3'
                    }
                };
            });

            expect(config.toObject()).toEqual({
                foo: {
                    bar: 'bar3'
                },
                bar: ['bar1', 'bar2']
            });
        });
    });
});

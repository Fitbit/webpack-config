'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config');

describe('ConfigMergeMixin', function () {
    context('#merge()', function() {
        it('should merge "options"', function() {
            var config = new Config();

            config.merge({
                foo: {
                    bar: 'bar1'
                },
                bar: ['bar1']
            }).merge({
                foo: {
                    bar: 'bar2'
                },
                bar: ['bar2']
            });

            expect(config.toObject()).to.eql({
                foo: {
                    bar: 'bar2'
                },
                bar: ['bar1', 'bar2']
            });
        });
    });
});

'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory');

var configFactory = ConfigFactory.INSTANCE;

describe('ConfigMergeMixin', function () {
    context('#merge()', function() {
        it('should merge "options"', function() {
            var config = configFactory.create({});

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

'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory');

describe('ConfigMergeMixin', function () {
    var configFactory = new ConfigFactory();

    context('#merge()', function() {
        it('should merge "options"', function() {
            var config = configFactory.createInstance({});

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

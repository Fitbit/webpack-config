'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory');

describe('ConfigDefaultsMixin', function () {
    var configFactory = new ConfigFactory();

    context('#defaults()', function() {
        it('should add missing "options"', function() {
            var config = configFactory.createInstance({});

            config.merge({
                foo: 'foo1'
            }).defaults({
                foo: 'foo2',
                bar: ['bar2']
            });

            expect(config.toObject()).to.eql({
                foo: 'foo1',
                bar: ['bar2']
            });
        });
    });
});

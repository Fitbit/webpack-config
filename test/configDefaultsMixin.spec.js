'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory');

var configFactory = ConfigFactory.INSTANCE;

describe('ConfigDefaultsMixin', function () {
    context('#defaults()', function() {
        it('should add missing "options"', function() {
            var config = configFactory.create({});

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

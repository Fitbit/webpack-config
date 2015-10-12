'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory');

var configFactory = ConfigFactory.INSTANCE;

describe('ConfigToObjectMixin', function () {
    context('#toObject()', function() {
        it('should return plain "Object"', function() {
            var config = configFactory.create({});

            config.merge({
                foo: 'foo1'
            });

            expect(config.toObject()).to.be.an('object');
        });
    });
});

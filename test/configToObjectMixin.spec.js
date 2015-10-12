'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory');

describe('ConfigToObjectMixin', function () {
    var configFactory = new ConfigFactory();

    context('#toObject()', function() {
        it('should return plain "Object"', function() {
            var config = configFactory.createInstance({});

            config.merge({
                foo: 'foo1'
            });

            expect(config.toObject()).to.be.an('object');
        });
    });
});

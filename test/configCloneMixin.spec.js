'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config'),
    ConfigFactory = require('../lib/configFactory');

describe('ConfigCloneMixin', function () {
    var configFactory = new ConfigFactory();

    context('#clone()', function() {
        it('should return clone of "Config"', function() {
            var config = configFactory.createInstance({});

            config.merge({
                foo: 'foo1'
            });

            var clone = config.clone();

            expect(config).not.to.be(clone);
            expect(clone).to.be.a(Config);
            expect(config.toObject()).to.eql({
                foo: 'foo1'
            });
        });
    });
});

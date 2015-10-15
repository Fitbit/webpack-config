'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config');

describe('ConfigToObjectMixin', function () {
    context('#toObject()', function() {
        it('should return plain "Object"', function() {
            var config = new Config();

            config.merge({
                foo: 'foo1'
            });

            expect(config.toObject()).to.be.an('object');
        });
    });
});

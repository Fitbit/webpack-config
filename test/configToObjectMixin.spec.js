'use strict';

var Config = require('../lib/config');

describe('ConfigToObjectMixin', function () {
    describe('#toObject()', function() {
        it('should return plain `Object`', function() {
            var config = new Config();

            config.merge({
                foo: 'foo1'
            });

            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });
    });
});

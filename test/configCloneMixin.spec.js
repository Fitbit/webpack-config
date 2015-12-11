'use strict';

var Config = require('../lib/config');

describe('ConfigCloneMixin', function () {
    describe('#clone()', function() {
        it('should return clone of `Config`', function() {
            var config = new Config();

            config.merge({
                foo: 'foo1'
            });

            var clone = config.clone();

            expect(config).not.toBe(clone);
            expect(clone).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });
    });
});

'use strict';

var _ = require('lodash'),
    ConfigTransformMap = require('../lib/configTransformMap');

describe('ConfigTransformMap', function () {
    var configTransformMap;

    beforeEach(function() {
        configTransformMap = new ConfigTransformMap();
    });

    describe('#set()', function() {
        it('should accept only `Function`', function() {
            configTransformMap.set('foo', 'bar', 1, true, _.noop);

            expect(configTransformMap.raw()).toEqual({
                foo: [_.noop]
            });
        });
    });

    describe('#get()', function() {
        it('should get `value` by `key`', function() {
            configTransformMap.set('foo', _.noop);

            expect(configTransformMap.get('foo')).toEqual([_.noop]);
        });
    });

    describe('#includes()', function() {
        it('should return `true` if `value` exists', function() {
            configTransformMap.set('foo', _.noop);

            expect(configTransformMap.includes('foo', _.noop)).toBe(true);
        });

        it('should return `false` if `value` does not exist', function() {
            expect(configTransformMap.includes('foo', _.noop)).toBe(false);
        });
    });

    describe('#has()', function() {
        it('should return `true` if `key` exists', function() {
            configTransformMap.set('foo', _.noop);

            expect(configTransformMap.has('foo')).toBe(true);
        });

        it('should return `false` if `key` does not exist', function() {
            expect(configTransformMap.has('foo')).toBe(false);
        });
    });

    describe('#raw()', function() {
        it('should return plain `Object`', function() {
            configTransformMap.set('foo', _.noop);

            expect(configTransformMap.raw()).toEqual({
                foo: [_.noop]
            });
        });
    });
});

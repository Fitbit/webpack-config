'use strict';

var InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment');

describe('InMemoryConfigEnvironment', function () {
    var configEnvironment;

    beforeEach(function() {
        configEnvironment = new InMemoryConfigEnvironment();
    });

    describe('#set()', function() {
        it('should add key/value pair', function() {
            configEnvironment.set('foo', 'foo').set('bar', 'bar');

            expect(configEnvironment.get('foo')).toEqual('foo');
            expect(configEnvironment.get('bar')).toEqual('bar');
        });
    });

    describe('#setAll()', function() {
        it('should add key/value pairs', function() {
            configEnvironment.setAll({
                foo: 'foo',
                bar: 'bar'
            });

            expect(configEnvironment.get('foo')).toEqual('foo');
            expect(configEnvironment.get('bar')).toEqual('bar');
        });
    });

    describe('#keys()', function() {
        it('should get all keys', function() {
            configEnvironment.setAll({
                foo: 'foo',
                bar: 'bar'
            });

            expect(configEnvironment.keys()).toEqual(['foo', 'bar']);
        });
    });

    describe('#get()', function() {
        it('should return value when it is `Function`', function() {
            configEnvironment.set('foo', function() {
                return 'bar';
            });

            expect(configEnvironment.get('foo')).toEqual('bar');
        });

        it('should return existing value', function() {
            configEnvironment.set('foo', 'bar');

            expect(configEnvironment.get('foo')).toEqual('bar');
        });

        it('should return `default` value', function() {
            expect(configEnvironment.get('foo', 'bar')).toEqual('bar');
        });
    });

    describe('#clear()', function() {
        it('should clear all key/value pairs', function() {
            configEnvironment.setAll({
                foo: 'foo',
                bar: 'bar'
            });

            configEnvironment.clear();

            expect(configEnvironment.keys()).toEqual([]);
        });
    });
});

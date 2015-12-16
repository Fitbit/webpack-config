'use strict';

var InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    ProcessEnvConfigEnvironment = require('../lib/processEnvConfigEnvironment'),
    DefaultConfigEnvironment = require('../lib/defaultConfigEnvironment');

describe('DefaultConfigEnvironment', function () {
    var inMemoryConfigEnvironment,
        processEnvConfigEnvironment,
        configEnvironment;

    beforeEach(function() {
        inMemoryConfigEnvironment = new InMemoryConfigEnvironment();
        processEnvConfigEnvironment = new ProcessEnvConfigEnvironment();
        configEnvironment = new DefaultConfigEnvironment(inMemoryConfigEnvironment, processEnvConfigEnvironment);
    });

    describe('#get()', function() {
        beforeEach(function() {
            process.env.foo = 'foo';
            process.env.bar = 'bar';
        });

        afterEach(function() {
            delete process.env.foo;
            delete process.env.bar;
        });


        it('should return `process.env.foo`', function() {
            expect(configEnvironment.get('foo')).toEqual('foo');
        });

        it('should return `process.env.bar`', function() {
            expect(configEnvironment.get('bar')).toEqual('bar');
        });
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
                foo: 1,
                bar: 2,
                qux: function() {
                    return this.foo;
                }
            });

            expect(configEnvironment.get('foo')).toEqual(1);
            expect(configEnvironment.get('bar')).toEqual(2);
            expect(configEnvironment.get('qux')).toEqual(1);
        });
    });

    describe('#keys()', function() {
        it('should get all keys', function() {
            configEnvironment.setAll({
                foo: 'foo',
                bar: 'bar'
            });

            expect(configEnvironment.keys()).toContain('foo', 'bar');
        });
    });

    describe('#clear()', function() {
        it('should clear all key/value pairs', function() {
            configEnvironment.setAll({
                foo: 'foo',
                bar: 'bar'
            });

            configEnvironment.clear();

            expect(configEnvironment.keys()).toEqual(processEnvConfigEnvironment.keys());
        });
    });

    describe('#getAll()', function() {
        it('should return all key/value pairs', function() {
            configEnvironment.setAll({
                foo: 'foo',
                bar: 'bar'
            });

            expect(configEnvironment.getAll()).toEqual({
                foo: 'foo',
                bar: 'bar'
            });
        });
    });
});

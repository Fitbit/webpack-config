'use strict';

var ProcessEnvConfigEnvironment = require('../lib/processEnvConfigEnvironment');

describe('InMemoryConfigEnvironment', function () {
    var configEnvironment;

    beforeEach(function() {
        configEnvironment = new ProcessEnvConfigEnvironment();
    });

    describe('#set()', function() {
        it('should throw error', function() {
            expect(configEnvironment.set).toThrow();
        });
    });

    describe('#setAll()', function() {
        it('should throw error', function() {
            expect(configEnvironment.setAll).toThrow();
        });
    });

    describe('#keys()', function() {
        it('should get keys', function() {
            expect(configEnvironment.keys()).toBeTruthy();
        });
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

    describe('#clear()', function() {
        it('should throw error', function() {
            expect(configEnvironment.clear).toThrow();
        });
    });
});

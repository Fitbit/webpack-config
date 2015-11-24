'use strict';

var ConfigEnvironment = require('../lib/configEnvironment');

describe('ConfigEnvironment', function () {
    var configEnvironment;

    describe('#value()', function() {
        beforeEach(function() {
            process.env.WEBPACK_ENV = 'foo';
            process.env.NODE_ENV = 'bar';

            configEnvironment = new ConfigEnvironment();
        });

        afterEach(function() {
            delete process.env.WEBPACK_ENV;
            delete process.env.NODE_ENV;
        });

        it('should return `process.env.WEBPACK_ENV`', function() {
            expect(configEnvironment.get('WEBPACK_ENV')).toEqual('foo');
        });

        it('should return `process.env.NODE_ENV`', function() {
            expect(configEnvironment.get('NODE_ENV')).toEqual('bar');
        });

        it('should return `env`', function() {
            expect(configEnvironment.get('env')).toEqual('foo');
        });
    });

    describe('#add()', function() {
        it('should add custom values', function() {
            configEnvironment.set({
                rev: 1
            });

            expect(configEnvironment.get('rev')).toEqual(1);
        });

        it('should override existing values', function() {
            configEnvironment.set({
                WEBPACK_ENV: 1, // eslint-disable-line
                NODE_ENV: 2 // eslint-disable-line
            });

            expect(configEnvironment.get('WEBPACK_ENV')).toEqual(1);
            expect(configEnvironment.get('NODE_ENV')).toEqual(2);
            expect(configEnvironment.get('env')).toEqual(1);
        });
    });
});

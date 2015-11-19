'use strict';

var expect = require('expect.js'),
    ConfigEnvironment = require('../lib/configEnvironment');

describe('ConfigEnvironment', function () {
    var configEnvironment;

    context('#value()', function() {
        beforeEach(function() {
            process.env.WEBPACK_ENV = 'foo';
            process.env.NODE_ENV = 'bar';

            configEnvironment = new ConfigEnvironment();
        });

        afterEach(function() {
            delete process.env.WEBPACK_ENV;
            delete process.env.NODE_ENV;
        });

        it('should return "process.env.WEBPACK_ENV"', function() {
            expect(configEnvironment.get('WEBPACK_ENV')).to.eql('foo');
        });

        it('should return "process.env.NODE_ENV"', function() {
            expect(configEnvironment.get('NODE_ENV')).to.eql('bar');
        });

        it('should return "env"', function() {
            expect(configEnvironment.get('env')).to.eql('foo');
        });
    });

    context('#add()', function() {
        it('should add custom values', function() {
            configEnvironment.set({
                rev: 1
            });

            expect(configEnvironment.get('rev')).to.eql(1);
        });

        it('should override existing values', function() {
            configEnvironment.set({
                WEBPACK_ENV: 1, // eslint-disable-line
                NODE_ENV: 2 // eslint-disable-line
            });

            expect(configEnvironment.get('WEBPACK_ENV')).to.eql(1);
            expect(configEnvironment.get('NODE_ENV')).to.eql(2);
            expect(configEnvironment.get('env')).to.eql(1);
        });
    });
});

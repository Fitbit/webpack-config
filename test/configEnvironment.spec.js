'use strict';

var expect = require('expect.js'),
    ConfigEnvironment = require('../lib/configEnvironment');

describe('ConfigEnvironment', function () {
    var configEnvironment = new ConfigEnvironment();

    context('#value()', function() {
        beforeEach(function() {
            process.env.WEBPACK_ENV = 'WEBPACK_ENV';
            process.env.NODE_ENV = 'NODE_ENV';
        });

        afterEach(function() {
            delete process.env.WEBPACK_ENV;
            delete process.env.NODE_ENV;
        });

        it('should return "process.env.WEBPACK_ENV"', function() {
            expect(configEnvironment.value('webpack_env')).to.eql('WEBPACK_ENV');
        });

        it('should return "process.env.NODE_ENV"', function() {
            expect(configEnvironment.value('node_env')).to.eql('NODE_ENV');
        });
    });

    context('#add()', function() {
        it('should add custom values', function() {
            configEnvironment.add({
                rev: 1
            });

            expect(configEnvironment.value('rev')).to.eql(1);
        });

        it('should override existing values', function() {
            configEnvironment.add({
                node_env: function() { // eslint-disable-line
                    return 2;
                },
                webpack_env: 'foo' // eslint-disable-line
            });

            expect(configEnvironment.value('node_env')).to.eql(2);
            expect(configEnvironment.value('webpack_env')).to.eql('foo');
        });
    });
});

'use strict';

var expect = require('expect.js'),
    ConfigNameResolver = require('../lib/configNameResolver');

describe('ConfigNameResolver', function () {
    var configNameResolver = new ConfigNameResolver();

    context('#resolve()', function() {
        beforeEach(function() {
            delete process.env.WEBPACK_ENV;
            delete process.env.NODE_ENV;
        });

        it('should replace "[env]" with "test" via "process.env.WEBPACK_ENV"', function() {
            process.env.WEBPACK_ENV = 'test';

            var filename = configNameResolver.resolve('webpack.[env].config.js');

            expect(filename).to.eql('webpack.test.config.js');
        });

        it('should replace "[env]" with "test" via "process.env.NODE_ENV"', function() {
            process.env.NODE_ENV = 'test';

            var filename = configNameResolver.resolve('webpack.[env].config.js');

            expect(filename).to.eql('webpack.test.config.js');
        });
    });

    context('#addVariables()', function() {
        it('should add custom variables', function() {
            configNameResolver.addVariables({
                rev: 1
            });

            var filename = configNameResolver.resolve('webpack.[rev].config.js');

            expect(filename).to.eql('webpack.1.config.js');
        });
    });
});

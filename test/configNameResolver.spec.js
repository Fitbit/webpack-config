'use strict';

var expect = require('expect.js'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    ConfigNameResolver = require('../lib/configNameResolver');

describe('ConfigNameResolver', function () {
    var configEnvironment = new ConfigEnvironment({
            env: function() {
                return this.node_env;
            },
            webpack_env: 'foo', // eslint-disable-line
            node_env: 'bar', // eslint-disable-line
            rev: 1
        }),
        configNameResolver = new ConfigNameResolver(configEnvironment);

    context('#resolve()', function() {
        it('should replace `[env]` with `bar`', function() {
            var filename = configNameResolver.resolve('webpack.[env].config.js');

            expect(filename).to.eql('webpack.bar.config.js');
        });

        it('should replace `[webpack_env]` with `foo`', function() {
            var filename = configNameResolver.resolve('webpack.[webpack_env].config.js');

            expect(filename).to.eql('webpack.foo.config.js');
        });

        it('should replace `[node_env]` with `bar`', function() {
            var filename = configNameResolver.resolve('webpack.[node_env].config.js');

            expect(filename).to.eql('webpack.bar.config.js');
        });

        it('should replace `[rev]` with `1`', function() {
            var filename = configNameResolver.resolve('webpack.[rev].config.js');

            expect(filename).to.eql('webpack.1.config.js');
        });
    });
});

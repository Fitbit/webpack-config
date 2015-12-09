'use strict';

var ConfigEnvironment = require('../lib/configEnvironment'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver');

describe('DefaultConfigNameResolver', function () {
    var configEnvironment = new ConfigEnvironment({
            env: function() {
                return this.node_env;
            },
            webpack_env: 'foo', // eslint-disable-line
            node_env: 'bar', // eslint-disable-line
            rev: 1
        }),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment);

    describe('#resolveName()', function() {
        it('should replace `[env]` with `bar`', function() {
            var filename = configNameResolver.resolveName('webpack.[env].config.js');

            expect(filename).toEqual('webpack.bar.config.js');
        });

        it('should replace `[webpack_env]` with `foo`', function() {
            var filename = configNameResolver.resolveName('webpack.[webpack_env].config.js');

            expect(filename).toEqual('webpack.foo.config.js');
        });

        it('should replace `[node_env]` with `bar`', function() {
            var filename = configNameResolver.resolveName('webpack.[node_env].config.js');

            expect(filename).toEqual('webpack.bar.config.js');
        });

        it('should replace `[rev]` with `1`', function() {
            var filename = configNameResolver.resolveName('webpack.[rev].config.js');

            expect(filename).toEqual('webpack.1.config.js');
        });
    });
});

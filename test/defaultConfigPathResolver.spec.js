'use strict';

var path = require('path'),
    InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver');

describe('DefaultConfigPathResolver', function () {
    var configEnvironment = new InMemoryConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new DefaultConfigPathResolver(configNameResolver);

    describe('#resolvePath()', function() {
        it('should return absolute path of file', function() {
            var filename = configPathResolver.resolvePath('webpack.config.js');

            expect(filename).toEqual(path.resolve('webpack.config.js'));
        });

        it('should return absolute path of module', function() {
            var filename = configPathResolver.resolvePath('lodash');

            expect(filename).toEqual(require.resolve('lodash'));
        });
    });
});

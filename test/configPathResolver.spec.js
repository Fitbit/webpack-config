'use strict';

var path = require('path'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    ConfigPathResolver = require('../lib/configPathResolver'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver');

describe('ConfigPathResolver', function () {
    var configEnvironment = new ConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new ConfigPathResolver(configNameResolver);

    describe('#resolve()', function() {
        it('should return absolute path of file', function() {
            var filename = configPathResolver.resolve('webpack.config.js');

            expect(filename).toEqual(path.resolve('webpack.config.js'));
        });

        it('should return absolute path of module', function() {
            var filename = configPathResolver.resolve('expect.js');

            expect(filename).toEqual(require.resolve('expect.js'));
        });
    });
});

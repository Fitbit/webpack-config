'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    DefaultConfigLoader = require('../lib/defaultConfigLoader'),
    InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver');

describe('DefaultConfigLoader', function () {
    var configEnvironment = new InMemoryConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new DefaultConfigPathResolver(configNameResolver),
        configFactory = new DefaultConfigFactory(),
        configLoader = new DefaultConfigLoader(configFactory, configPathResolver),
        filename = configPathResolver.resolvePath('./test/fixtures/tmp/webpack.config.js');

    describe('#loadConfig()', function() {
        function updateConfig() {
            fs.copySync(configPathResolver.resolvePath('./test/fixtures/webpack.2.config.js'), filename);
        }

        beforeEach(function(done) {
            configLoader.useCache = true;

            fs.copy(configPathResolver.resolvePath('./test/fixtures/webpack.1.config.js'), filename, done);
        });

        afterEach(function(done) {
            fs.remove(path.dirname(filename), done);
        });

        it('should return same configs when `useCache` is `true`', function() {
            var config1 = configLoader.loadConfig(filename);

            updateConfig();

            var config2 = configLoader.loadConfig(filename);

            expect(config1.toObject()).toEqual(config2.toObject());
        });

        it('should return different configs when `useCache` is `false`', function () {
            var config1 = configLoader.loadConfig(filename);

            configLoader.useCache = false;

            updateConfig();

            var config2 = configLoader.loadConfig(filename);

            expect(config1.toObject()).not.toEqual(config2.toObject());
        });

        it('should throw exception if `filename` does not exist', function () {
            expect(configLoader.loadConfig, './test/fixtures/webpack.not-found.config.js').toThrow();
        });
    });
});

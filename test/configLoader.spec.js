'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    ConfigNameResolver = require('../lib/configNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

describe('ConfigLoader', function () {
    var configEnvironment = new ConfigEnvironment(),
        configNameResolver = new ConfigNameResolver(configEnvironment),
        configPathResolver = new ConfigPathResolver(configNameResolver),
        configFactory = new DefaultConfigFactory(),
        configLoader = new ConfigLoader(configFactory, configPathResolver),
        filename = configPathResolver.resolve('./test/fixtures/tmp/webpack.config.js');

    describe('#load()', function() {
        function updateConfig() {
            fs.copySync(configPathResolver.resolve('./test/fixtures/webpack.2.config.js'), filename);
        }

        beforeEach(function(done) {
            configLoader.useCache = true;

            fs.copy(configPathResolver.resolve('./test/fixtures/webpack.1.config.js'), filename, done);
        });

        afterEach(function(done) {
            fs.remove(path.dirname(filename), done);
        });

        it('should return same configs when `useCache` is `true`', function() {
            var config1 = configLoader.load(filename);

            updateConfig();

            var config2 = configLoader.load(filename);

            expect(config1.toObject()).toEqual(config2.toObject());
        });

        it('should return different configs when `useCache` is `false`', function () {
            var config1 = configLoader.load(filename);

            configLoader.useCache = false;

            updateConfig();

            var config2 = configLoader.load(filename);

            expect(config1.toObject()).not.toEqual(config2.toObject());
        });

        it('should throw exception if `filename` does not exist', function () {
            expect(configLoader.load, './test/fixtures/webpack.not-found.config.js').toThrow();
        });
    });
});

'use strict';

var path = require('path'),
    Config = require('../lib/config'),
    DefaultConfigLoader = require('../lib/defaultConfigLoader'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver'),
    ConfigFinder = require('../lib/configFinder');

describe('ConfigFinder', function () {
    var configFactory = new DefaultConfigFactory(),
        configEnvironment = new ConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new DefaultConfigPathResolver(configNameResolver),
        configLoader = new DefaultConfigLoader(configFactory, configPathResolver),
        configFinder = new ConfigFinder(configLoader, configPathResolver);

    describe('#closest()', function() {
        it('should find config', function() {
            var config = configFinder.closest('./test/fixtures/dir1/dir2/dir3/webpack.1.config.js');

            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                filename: path.resolve('./test/fixtures/webpack.1.config.js'),
                foo: 'foo1'
            });
        });

        it('should return `null` when config does not exist', function() {
            var config = configFinder.closest('./webpack.config.js');

            expect(config).toEqual(null);
        });
    });
});

'use strict';

var path = require('path'),
    Config = require('../lib/config'),
    DefaultConfigLoader = require('../lib/defaultConfigLoader'),
    InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver'),
    DefaultConfigFinder = require('../lib/defaultConfigFinder'),
    ClosestConfigFinderStrategy = require('../lib/closestConfigFinderStrategy');

describe('DefaultConfigFinder', function () {
    var configFactory = new DefaultConfigFactory(),
        configEnvironment = new InMemoryConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new DefaultConfigPathResolver(configNameResolver),
        configLoader = new DefaultConfigLoader(configFactory, configPathResolver),
        closestConfigFinderStrategy = new ClosestConfigFinderStrategy(configLoader, configPathResolver),
        defaultConfigFinder = new DefaultConfigFinder(closestConfigFinderStrategy);

    describe('#findClosestConfig()', function() {
        it('should find config', function() {
            var config = defaultConfigFinder.findClosestConfig('./test/fixtures/dir1/dir2/dir3/webpack.1.config.js');

            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                filename: path.resolve('./test/fixtures/webpack.1.config.js'),
                foo: 'foo1'
            });
        });

        it('should return `null` when config does not exist', function() {
            var config = defaultConfigFinder.findClosestConfig('./webpack.config.js');

            expect(config).toEqual(null);
        });
    });
});

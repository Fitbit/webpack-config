'use strict';

var Config = require('./lib/config'),
    DefaultConfigEnvironment = require('./lib/defaultConfigEnvironment'),
    InMemoryConfigEnvironment = require('./lib/inMemoryConfigEnvironment'),
    ProcessEnvConfigEnvironment = require('./lib/processEnvConfigEnvironment'),
    DefaultConfigNameResolver = require('./lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('./lib/defaultConfigPathResolver'),
    DefaultConfigFactory = require('./lib/defaultConfigFactory'),
    DefaultConfigLoader = require('./lib/defaultConfigLoader'),
    DefaultConfigFinder = require('./lib/defaultConfigFinder'),
    ClosestConfigFinderStrategy = require('./lib/closestConfigFinderStrategy');

var inMemoryConfigEnvironment = new InMemoryConfigEnvironment(),
    processEnvConfigEnvironment = ProcessEnvConfigEnvironment.INSTANCE,
    configEnvironment = new DefaultConfigEnvironment(inMemoryConfigEnvironment, processEnvConfigEnvironment),
    configFactory = DefaultConfigFactory.INSTANCE,
    configNameResolver = new DefaultConfigNameResolver(configEnvironment),
    configPathResolver = new DefaultConfigPathResolver(configNameResolver),
    configLoader = new DefaultConfigLoader(configFactory, configPathResolver),
    closestConfigFinderStrategy = new ClosestConfigFinderStrategy(configLoader, configPathResolver),
    configFinder = new DefaultConfigFinder(closestConfigFinderStrategy);

/**
 * @property {ConfigEnvironment}
 * @static
 */
Config.environment = configEnvironment;

/**
 * @property {ConfigNameResolver}
 * @static
 */
Config.nameResolver = configNameResolver;

/**
 * @property {ConfigFactory}
 * @static
 */
Config.factory = configFactory;

/**
 * @property {ConfigLoader}
 * @static
 */
Config.loader = configLoader;

/**
 * @property {ConfigFinder}
 * @static
 */
Config.finder = configFinder;

/**
 * @property {ConfigPathResolver}
 * @static
 */
Config.pathResolver = configPathResolver;

/**
 * @const {String} - `webpack.config.js`
 */
Config.FILENAME = 'webpack.config.js';

/**
 * @module webpack-config
 * @returns {Config}
 */
module.exports = Config;

'use strict';

var Config = require('./lib/config'),
    ConfigEnvironment = require('./lib/configEnvironment'),
    DefaultConfigNameResolver = require('./lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('./lib/defaultConfigPathResolver'),
    DefaultConfigFactory = require('./lib/defaultConfigFactory'),
    DefaultConfigLoader = require('./lib/defaultConfigLoader'),
    ConfigFinder = require('./lib/configFinder'),
    ConfigVisitor = require('./lib/configVisitor');

var configEnvironment = new ConfigEnvironment(),
    configFactory = DefaultConfigFactory.INSTANCE,
    configNameResolver = new DefaultConfigNameResolver(configEnvironment),
    configPathResolver = new DefaultConfigPathResolver(configNameResolver),
    configLoader = new DefaultConfigLoader(configFactory, configPathResolver),
    configVisitor = new ConfigVisitor(configLoader, configPathResolver),
    configFinder = new ConfigFinder(configLoader, configPathResolver);

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
 * @property {ConfigVisitor}
 * @static
 */
Config.visitor = configVisitor;

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

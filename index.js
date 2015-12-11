'use strict';

var Config = require('./lib/config'),
    DefaultConfigEnvironment = require('./lib/defaultConfigEnvironment'),
    DefaultConfigNameResolver = require('./lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('./lib/defaultConfigPathResolver'),
    DefaultConfigFactory = require('./lib/defaultConfigFactory'),
    DefaultConfigLoader = require('./lib/defaultConfigLoader'),
    DefaultConfigFinder = require('./lib/defaultConfigFinder');

/**
 * @property {ConfigEnvironment}
 * @static
 */
Config.environment = DefaultConfigEnvironment.INSTANCE;

/**
 * @property {ConfigNameResolver}
 * @static
 */
Config.nameResolver = DefaultConfigNameResolver.INSTANCE;

/**
 * @property {ConfigFactory}
 * @static
 */
Config.factory = DefaultConfigFactory.INSTANCE;

/**
 * @property {ConfigLoader}
 * @static
 */
Config.loader = DefaultConfigLoader.INSTANCE;

/**
 * @property {ConfigFinder}
 * @static
 */
Config.finder = DefaultConfigFinder.INSTANCE;

/**
 * @property {ConfigPathResolver}
 * @static
 */
Config.pathResolver = DefaultConfigPathResolver.INSTANCE;

/**
 * @const {String} - `webpack.config.js`
 */
Config.FILENAME = 'webpack.config.js';

/**
 * @module webpack-config
 * @returns {Config}
 */
module.exports = Config;

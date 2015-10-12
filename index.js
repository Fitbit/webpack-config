'use strict';

var Config = require('./lib/config'),
    ConfigNameResolver = require('./lib/configNameResolver'),
    ConfigFactory = require('./lib/configFactory'),
    ConfigLoader = require('./lib/configLoader'),
    ConfigFinder = require('./lib/configFinder'),
    ConfigVisitor = require('./lib/configVisitor');

/**
 * @property {ConfigNameResolver}
 * @static
 */
Config.nameResolver = ConfigNameResolver.INSTANCE;
/**
 * @property {ConfigFinder}
 * @static
 */
Config.factory = ConfigFactory.INSTANCE;
/**
 * @property {ConfigLoader}
 * @static
 */
Config.loader = ConfigLoader.INSTANCE;
/**
 * @property {ConfigFinder}
 * @static
 */
Config.finder = ConfigFinder.INSTANCE;
/**
 * @property {ConfigVisitor}
 * @static
 */
Config.visitor = ConfigVisitor.INSTANCE;

/**
 * @module webpack-config
 * @returns {Config}
 */
module.exports = Config;

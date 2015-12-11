'use strict';

var util = require('util'),
    _ = require('lodash'),
    ConfigLoader = require('./configLoader'),
    DefaultConfigFactory = require('./defaultConfigFactory'),
    DefaultConfigPathResolver = require('./defaultConfigPathResolver');

/**
 * @alias DefaultConfigLoader
 * @class
 * @constructor
 * @implements {ConfigLoader}
 * @param {ConfigFactory} factory
 * @param {ConfigPathResolver} pathResolver
 * @param {Boolean} [useCache=true] - Use cache or not
 */
function DefaultConfigLoader(factory, pathResolver, useCache) {
    if (!_.isBoolean(useCache)) {
        useCache = true;
    }

    this.factory = factory;
    this.pathResolver = pathResolver;
    this.useCache = useCache;
}

util.inherits(DefaultConfigLoader, ConfigLoader);

/**
 * @override
 */
DefaultConfigLoader.prototype.loadConfig = function(filename) {
    filename = this.resolvePath(filename);

    this.clearCache(filename);

    var config = this.loadRawConfig(filename);

    if (config && !_.isString(config.filename)) {
        config.filename = filename;
    }

    return config;
};

/**
 * @private
 * @param {String} filename
 * @returns {String}
 */
DefaultConfigLoader.prototype.resolvePath = function(filename) {
    return this.pathResolver.resolvePath(filename);
};

/**
 * @private
 * @param {String} filename
 */
DefaultConfigLoader.prototype.clearCache = function(filename) {
    if (this.useCache === false) {
        delete require.cache[filename];
    }
};

/**
 * @private
 * @param {String} filename
 * @returns {Config|Config[]}
 */
DefaultConfigLoader.prototype.loadRawConfig = function(filename) {
    var obj = require(filename);

    return this.createConfig(obj);
};

/**
 * @private
 * @param {*} obj
 * @returns {Config|Config[]}
 */
DefaultConfigLoader.prototype.createConfig = function(obj) {
    return this.factory.createConfig(obj);
};

/**
 * @private
 * @constant
 * @type {DefaultConfigLoader}
 */
var INSTANCE = new DefaultConfigLoader(DefaultConfigFactory.INSTANCE, DefaultConfigPathResolver.INSTANCE);

/**
 * @module webpack-config/lib/defaultConfigLoader
 * @returns {DefaultConfigLoader}
 */
module.exports = DefaultConfigLoader;
module.exports.INSTANCE = INSTANCE;

'use strict';

var _ = require('lodash');

/**
 * @class
 * @alias ConfigLoader
 * @constructor
 * @param {ConfigFactory} factory
 * @param {ConfigPathResolver} pathResolver
 * @param {Boolean} [useCache=true] - Use cache or not
 */
function ConfigLoader(factory, pathResolver, useCache) {
    if (!_.isBoolean(useCache)) {
        useCache = true;
    }

    this.factory = factory;
    this.pathResolver = pathResolver;
    this.useCache = useCache;
}

/**
 * Loads config
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigLoader.prototype.load = function(filename) {
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
ConfigLoader.prototype.resolvePath = function(filename) {
    return this.pathResolver.resolvePath(filename);
};

/**
 * @private
 * @param {String} filename
 */
ConfigLoader.prototype.clearCache = function(filename) {
    if (this.useCache === false) {
        delete require.cache[filename];
    }
};

/**
 * @private
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigLoader.prototype.loadRawConfig = function(filename) {
    var obj = require(filename);

    return this.createConfig(obj);
};

/**
 * @private
 * @param {*} obj
 * @returns {Config|Config[]}
 */
ConfigLoader.prototype.createConfig = function(obj) {
    return this.factory.createConfig(obj);
};

/**
 * @module webpack-config/lib/configLoader
 * @returns {ConfigLoader}
 */
module.exports = ConfigLoader;

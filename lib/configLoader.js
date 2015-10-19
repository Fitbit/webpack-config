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
    filename = this.pathResolver.resolve(filename);

    if (this.useCache === false) {
        delete require.cache[filename];
    }

    var obj = require(filename),
        config = this.factory.create(obj);

    if (config && !_.isString(config.filename)) {
        config.filename = filename;
    }

    return config;
};

/**
 * @module webpack-config/lib/configLoader
 * @returns {ConfigLoader}
 */
module.exports = ConfigLoader;

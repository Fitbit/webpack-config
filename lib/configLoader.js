'use strict';

var ConfigFactory = require('./configFactory'),
    ConfigPathResolver = require('./configPathResolver');

/**
 * @class
 * @alias ConfigLoader
 * @constructor
 * @param {ConfigFactory} factory
 * @param {ConfigPathResolver} pathResolver
 * @param {Boolean} [useCache=true] - Use cache or not
 */
function ConfigLoader(factory, pathResolver, useCache) {
    this.factory = factory;
    this.pathResolver = pathResolver;
    this.useCache = useCache;
}

/**
 * Loads config from file
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigLoader.prototype.load = function(filename) {
    filename = this.pathResolver.resolve(filename);

    if (this.useCache === false) {
        delete require.cache[filename];
    }

    var obj = require(filename);

    return this.factory.create(obj);
};

/**
 * @static
 * @property {ConfigLoader}
 */
ConfigLoader.INSTANCE = new ConfigLoader(ConfigFactory.INSTANCE, ConfigPathResolver.INSTANCE, true);

/**
 * @module webpack-config/lib/configLoader
 * @returns {ConfigLoader}
 */
module.exports = ConfigLoader;

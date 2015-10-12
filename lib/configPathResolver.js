'use strict';

var path = require('path'),
    ConfigNameResolver = require('./configNameResolver');

/**
 * @class
 * @alias ConfigPathResolver
 * @constructor
 * @param {ConfigNameResolver} nameResolver
 */
function ConfigPathResolver(nameResolver) {
    this.nameResolver = nameResolver;
}

/**
 * Resolves path
 * @param {String} filename
 * @returns {String}
 */
ConfigPathResolver.prototype.resolve = function(filename) {
    return path.resolve(this.nameResolver.resolve(filename));
};

/**
 * @static
 * @property {ConfigPathResolver}
 */
ConfigPathResolver.INSTANCE = new ConfigPathResolver(ConfigNameResolver.INSTANCE);

/**
 * @module webpack-config/lib/configPathResolver
 * @returns {ConfigPathResolver}
 */
module.exports = ConfigPathResolver;

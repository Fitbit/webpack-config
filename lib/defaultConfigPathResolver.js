'use strict';

var util = require('util'),
    path = require('path'),
    ConfigPathResolver = require('./configPathResolver'),
    DefaultConfigNameResolver = require('./defaultConfigNameResolver');

/**
 * @alias DefaultConfigPathResolver
 * @class
 * @implements {ConfigPathResolver}
 * @constructor
 * @param {ConfigNameResolver} nameResolver
 */
function DefaultConfigPathResolver(nameResolver) {
    this.nameResolver = nameResolver;
}

util.inherits(DefaultConfigPathResolver, ConfigPathResolver);

/**
 * @override
 */
DefaultConfigPathResolver.prototype.resolvePath = function(filename) {
    filename = this.resolveName(filename);

    try {
        filename = this.resolveModulePath(filename);
    } catch (e) {
        filename = this.resolveAbsolutePath(filename);
    }

    return filename;
};

/**
 * @private
 * @param {String} filename
 * @returns {String}
 */
DefaultConfigPathResolver.prototype.resolveName = function(filename) {
    return this.nameResolver.resolveName(filename);
};

/**
 * @private
 * @param {String} filename
 * @returns {String}
 */
DefaultConfigPathResolver.prototype.resolveModulePath = function(filename) {
    return require.resolve(filename);
};

/**
 * @private
 * @param {String} filename
 * @returns {String}
 */
DefaultConfigPathResolver.prototype.resolveAbsolutePath = function(filename) {
    return path.resolve(filename);
};

/**
 * @private
 * @constant
 * @type {DefaultConfigPathResolver}
 */
var INSTANCE = new DefaultConfigPathResolver(DefaultConfigNameResolver.INSTANCE);

/**
 * @module webpack-config/lib/defaultConfigPathResolver
 * @returns {DefaultConfigPathResolver}
 */
module.exports = DefaultConfigPathResolver;
module.exports.INSTANCE = INSTANCE;

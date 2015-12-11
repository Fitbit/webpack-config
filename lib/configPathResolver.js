'use strict';

/**
 * @alias ConfigPathResolver
 * @interface
 */
function ConfigPathResolver() {}

/**
 * Resolves `filename`
 * @abstract
 * @param {String} filename
 * @returns {String}
 */
ConfigPathResolver.prototype.resolvePath = function(filename) {}; // eslint-disable-line

/**
 * @module webpack-config/lib/configPathResolver
 * @returns {ConfigPathResolver}
 */
module.exports = ConfigPathResolver;

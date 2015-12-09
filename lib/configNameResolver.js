'use strict';

/**
 * @alias ConfigNameResolver
 * @interface
 */
function ConfigNameResolver() {}

/**
 * Resolves `filename`
 * @abstract
 * @param {String} filename
 * @returns {String}
 */
ConfigNameResolver.prototype.resolveName = function(filename) {}; // eslint-disable-line

/**
 * @module webpack-config/lib/configNameResolver
 * @returns {ConfigNameResolver}
 */
module.exports = ConfigNameResolver;

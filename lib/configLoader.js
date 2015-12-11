'use strict';

/**
 * @alias ConfigLoader
 * @interface
 */
function ConfigLoader() {}

/**
 * Loads config
 * @abstract
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigLoader.prototype.loadConfig = function(filename) {}; // eslint-disable-line

/**
 * @module webpack-config/lib/configLoader
 * @returns {ConfigLoader}
 */
module.exports = ConfigLoader;

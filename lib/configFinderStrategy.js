'use strict';

/**
 * @alias ConfigFinderStrategy
 * @interface
 */
function ConfigFinderStrategy() {}

/**
 * Finds config
 * @abstract
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigFinderStrategy.prototype.findConfig = function(filename) {}; // eslint-disable-line

/**
 * @module webpack-config/lib/configFinderStrategy
 * @returns {ConfigFinderStrategy}
 */
module.exports = ConfigFinderStrategy;

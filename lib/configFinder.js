'use strict';

/**
 * @alias ConfigFinder
 * @interface
 */
function ConfigFinder() {}

/**
 * Finds closest config
 * @abstract
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigFinder.prototype.findClosestConfig = function(filename) {}; // eslint-disable-line

/**
 * @module webpack-config/lib/configFinder
 * @returns {ConfigFinder}
 */
module.exports = ConfigFinder;

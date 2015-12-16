'use strict';

/**
 * @alias ConfigEnvironment
 * @interface
 */
function ConfigEnvironment() {}

/**
 * Adds a new element with a specified `key` and `value`
 * @abstract
 * @param {*} key
 * @param {*} value
 * @returns {ConfigEnvironment}
 */
ConfigEnvironment.prototype.set = function(key, value) {}; // eslint-disable-line

/**
 * Adds a new key/value pairs
 * @abstract
 * @param {Object} map
 * @returns {ConfigEnvironment}
 */
ConfigEnvironment.prototype.setAll = function(map) {}; // eslint-disable-line

/**
 * Returns array that contains the `keys`
 * @abstract
 * @returns {String[]}
 */
ConfigEnvironment.prototype.keys = function() {};

/**
 * Returns the element associated with the specified `key` or `defaultValue` if `key` can't be found
 * @abstract
 * @param {*} key
 * @param {*=} defaultValue
 * @returns {*}
 */
ConfigEnvironment.prototype.get = function(key, defaultValue) {}; // eslint-disable-line

/**
 * Removes all key/value pairs
 * @abstract
 */
ConfigEnvironment.prototype.clear = function() {};

/**
 * Returns all key/value pairs
 * @abstract
 * @returns {*}
 */
ConfigEnvironment.prototype.getAll = function() {};

/**
 * @module webpack-config/lib/configEnvironment
 * @returns {ConfigEnvironment}
 */
module.exports = ConfigEnvironment;

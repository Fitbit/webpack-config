'use strict';

/**
 * @alias ConfigFactory
 * @interface
 */
function ConfigFactory() {}

/**
 * Creates config
 * @abstract
 * @param {*} obj
 * @returns {Config|Config[]}
 */
ConfigFactory.prototype.createConfig = function(obj) {}; // eslint-disable-line

/**
 * @module webpack-config/lib/configFactory
 * @returns {ConfigFactory}
 */
module.exports = ConfigFactory;

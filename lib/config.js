'use strict';

var util = require('./util');

/**
 * @class
 * @alias Config
 * @constructor
 * @classdesc Represents webpack config
 * @param {Object=} options - Please see more info about {@link http://webpack.github.io/docs/configuration.html options}.
 * @memberof module:webpack-config
 */
function Config(options) {
    this.merge(options);
}

/**
 * Merges options
 * @param {Object=} options
 * @returns {Config}
 */
Config.prototype.merge = function(options) {
    util.merge(this, options);

    return this;
};

/**
 * Merges default options.
 * @param {Object=} options
 * @returns {Config}
 */
Config.prototype.defaults = function(options) {
    util.defaults(this, options);

    return this;
};

/**
 * Creates a new config and merges options.
 * @param {Object=} options
 * @returns {Config}
 * */
Config.prototype.extend = function(options) {
    return new Config(this).merge(options);
};

/**
 * Returns webpack config.
 * @returns {Object}
 * */
Config.prototype.toPlainObject = function() {
    return util.toPlainObject(this);
};

module.exports = Config;

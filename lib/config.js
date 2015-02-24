'use strict';

var _ = require('lodash');

var merge = _.partialRight(_.merge, function recursiveMerge() {
    if (_.isArray(arguments[0]) || _.isArray(arguments[1])) {
        return _.union(arguments[1], arguments[0]);
    }

    return _.merge(arguments[0], arguments[1], recursiveMerge);
});

var defaults = _.partialRight(_.merge, function recursiveDefaults() {
    if (_.isArray(arguments[0]) || _.isDate(arguments[0])) {
        return arguments[0];
    }

    return _.merge(arguments[0], arguments[1], recursiveDefaults);
});

/**
 * @class
 * @alias Config
 * @constructor
 * @classdesc Represents webpack config
 * @param {Object} options - Please see {@link http://webpack.github.io/docs/configuration.html webpack.github.io}
 * @memberof module:webpack-config
 */
function Config(options) {
    this.merge(options);
}

/**
 * Merges options
 * @param {Object} options - Options
 * @returns {Config}
 */
Config.prototype.merge = function(options) {
    merge(this, options);

    return this;
};

/**
 * Merges default options
 * @param {Object} options - Options
 * @returns {Config}
 */
Config.prototype.defaults = function(options) {
    defaults(this, options);

    return this;
};

/**
 * Creates a new config and merges options
 * @param {Object} options - Options
 * @returns {Config}
 * */
Config.prototype.extend = function(options) {
    return new Config(this).merge(options);
};

/**
 * Returns webpack config
 * @returns {Object}
 * */
Config.prototype.toPlainObject = function() {
    return _.omit(this, function(value, key) {
        return !_.has(this, key);
    }, this);
};

module.exports = Config;

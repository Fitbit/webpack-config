'use strict';

var _ = require('lodash'),
    Config = require('./config');

/**
 * @class
 * @alias MultiConfig
 * @constructor
 * @classdesc Represents multi webpack config.
 * @param {Object|Object[]} [arguments]
 * @memberof module:webpack-config
 */
function MultiConfig() {
    var array = _.flatten(_.toArray(arguments), true);

    Array.prototype.push.apply(this, array);
}

MultiConfig.prototype.toArray = function() {
    var array = _.toArray(this);

    return array.map(function(config, i) {
        var isConfig = config instanceof Config;

        if (!isConfig) {
            config = new Config(config);

            array[i] = config;
        }

        return config;
    });
};

/**
 * Merges options
 * @param {Object=} options
 * @returns {MultiConfig}
 */
MultiConfig.prototype.merge = function(options) {
    this.toArray().forEach(function(config) {
        config.merge(options);
    });

    return this;
};

/**
 * Merges default options.
 * @param {Object=} options
 * @returns {MultiConfig}
 */
MultiConfig.prototype.defaults = function(options) {
    this.toArray().forEach(function(config) {
        config.defaults(options);
    });

    return this;
};

/**
 * Creates a new config and merges options.
 * @param {Object=} options
 * @returns {MultiConfig}
 * */
MultiConfig.prototype.extend = function(options) {
    return new MultiConfig(this).merge(options);
};

/**
 * Returns webpack configs.
 * @returns {Array}
 * */
MultiConfig.prototype.toPlainObject = function() {
    return this.toArray().map(function(config) {
        return config.toPlainObject();
    });
};

module.exports = MultiConfig;

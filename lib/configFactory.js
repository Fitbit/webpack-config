'use strict';

var _ = require('lodash'),
    Config = require('./config');

/**
 * @class
 * @alias ConfigFactory
 * @constructor
 */
function ConfigFactory() {}

/**
 * Creates config
 * @param {Object|Object[]|Function} obj
 * @returns {Config|Config[]}
 */
ConfigFactory.prototype.create = function(obj) {
    if (_.isFunction(obj)) {
        obj = obj();
    }

    var config;

    if (_.isArray(obj)) {
        config = obj.map(function(x) {
            return new Config().merge(x);
        });
    } else {
        config = new Config().merge(obj);
    }

    return config;
};

/**
 * @module webpack-config/lib/configFactory
 * @returns {ConfigFactory}
 */
module.exports = ConfigFactory;

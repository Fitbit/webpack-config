'use strict';

var util = require('util'),
    _ = require('lodash'),
    Config = require('./config'),
    ConfigFactory = require('./configFactory');

/**
 * @alias DefaultConfigFactory
 * @class
 * @constructor
 * @implements {ConfigFactory}
 */
function DefaultConfigFactory() {}

util.inherits(DefaultConfigFactory, ConfigFactory);

/**
 * @override
 */
DefaultConfigFactory.prototype.createConfig = function(obj) {
    var config = this.createFromFunction(obj);

    if (_.isArray(config)) {
        config = this.createFromArray(config);
    } else {
        config = this.createFromObject(config);
    }

    return config;
};

/**
 * @private
 * @param {Function|Object} obj
 * @returns {*}
 */
DefaultConfigFactory.prototype.createFromFunction = function(obj) {
    var config = obj;

    if (_.isFunction(obj)) {
        config = obj();
    }

    return config;
};

/**
 * @private
 * @param {Object} obj
 * @returns {Config}
 */
DefaultConfigFactory.prototype.createFromObject = function(obj) {
    return new Config().merge(obj);
};

/**
 * @private
 * @param {Object[]} arr
 * @returns {Config[]}
 */
DefaultConfigFactory.prototype.createFromArray = function(arr) {
    return _.map(arr, this.createFromObject, this);
};

/**
 * @private
 * @constant
 * @type {DefaultConfigFactory}
 */
var INSTANCE = new DefaultConfigFactory();

/**
 * @module webpack-config/lib/defaultConfigFactory
 * @returns {DefaultConfigFactory}
 */
module.exports = DefaultConfigFactory;
module.exports.INSTANCE = INSTANCE;

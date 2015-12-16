'use strict';

var util = require('util'),
    _ = require('lodash'),
    ConfigEnvironment = require('./configEnvironment'),
    InMemoryConfigEnvironment = require('./inMemoryConfigEnvironment'),
    ProcessEnvConfigEnvironment = require('./processEnvConfigEnvironment');

/**
 * @class
 * @alias DefaultConfigEnvironment
 * @constructor
 * @param {ConfigEnvironment} mainEnvironment
 * @param {ConfigEnvironment} fallbackEnvironment
 * @implements {ConfigEnvironment}
 */
function DefaultConfigEnvironment(mainEnvironment, fallbackEnvironment) {
    this.mainEnvironment = mainEnvironment;
    this.fallbackEnvironment = fallbackEnvironment;
}

util.inherits(DefaultConfigEnvironment, ConfigEnvironment);

/**
 * @override
 */
DefaultConfigEnvironment.prototype.set = function(key, value) {
    this.mainEnvironment.set(key, value);

    return this;
};

/**
 * @override
 */
DefaultConfigEnvironment.prototype.setAll = function(map) {
    this.mainEnvironment.setAll(map);

    return this;
};

/**
 * @override
 */
DefaultConfigEnvironment.prototype.keys = function() {
    return _.union(this.mainEnvironment.keys(), this.fallbackEnvironment.keys());
};

/**
 * @override
 */
DefaultConfigEnvironment.prototype.get = function(key, defaultValue) {
    var value = this.mainEnvironment.get(key, defaultValue);

    if (_.isUndefined(value)) {
        value = this.fallbackEnvironment.get(key, defaultValue);
    }

    return value;
};

/**
 * @override
 */
DefaultConfigEnvironment.prototype.clear = function() {
    this.mainEnvironment.clear();
};

/**
 * @override
 */
DefaultConfigEnvironment.prototype.getAll = function() {
    return this.mainEnvironment.getAll();
};

/**
 * @private
 * @constant
 * @type {DefaultConfigEnvironment}
 */
var INSTANCE = new DefaultConfigEnvironment(InMemoryConfigEnvironment.INSTANCE, ProcessEnvConfigEnvironment.INSTANCE);

/**
 * @module webpack-config/lib/defaultConfigEnvironment
 * @returns {DefaultConfigEnvironment}
 */
module.exports = DefaultConfigEnvironment;
module.exports.INSTANCE = INSTANCE;

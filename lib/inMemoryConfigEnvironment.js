'use strict';

var util = require('util'),
    _ = require('lodash'),
    ConfigEnvironment = require('./configEnvironment');

/**
 * @class
 * @alias InMemoryConfigEnvironment
 * @constructor
 * @implements {ConfigEnvironment}
 */
function InMemoryConfigEnvironment() {
    this.map = {};
}

util.inherits(InMemoryConfigEnvironment, ConfigEnvironment);

/**
 * @override
 */
InMemoryConfigEnvironment.prototype.set = function(key, value) {
    this.map[key] = value;

    return this;
};

/**
 * @override
 */
InMemoryConfigEnvironment.prototype.setAll = function(map) {
    _.forEach(map, _.rearg(_.bind(this.set, this), [1, 0]));

    return this;
};

/**
 * @override
 */
InMemoryConfigEnvironment.prototype.keys = function() {
    return _.keys(this.map);
};

/**
 * @override
 */
InMemoryConfigEnvironment.prototype.get = function(key, defaultValue) {
    return _.result(this.map, key, defaultValue);
};

/**
 * @override
 */
InMemoryConfigEnvironment.prototype.clear = function() {
    _.forEach(this.map, _.bind(function(value, key) {
        delete this.map[key];
    }, this));
};

/**
 * @override
 */
InMemoryConfigEnvironment.prototype.getAll = function() {
    return this.map;
};

/**
 * @private
 * @constant
 * @type {InMemoryConfigEnvironment}
 */
var INSTANCE = new InMemoryConfigEnvironment();

/**
 * @module webpack-config/lib/inMemoryConfigEnvironment
 * @returns {InMemoryConfigEnvironment}
 */
module.exports = InMemoryConfigEnvironment;
module.exports.INSTANCE = INSTANCE;

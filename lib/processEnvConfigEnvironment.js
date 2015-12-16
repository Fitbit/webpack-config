'use strict';

var util = require('util'),
    _ = require('lodash'),
    ConfigEnvironment = require('./configEnvironment');

function throwNotAllowedError() {
    throw new Error('`process.env` is immutable.');
}

/**
 * @class `process.env` wrapper
 * @alias ProcessEnvConfigEnvironment
 * @constructor
 * @implements {ConfigEnvironment}
 */
function ProcessEnvConfigEnvironment() {}

util.inherits(ProcessEnvConfigEnvironment, ConfigEnvironment);

/**
 * @override
 * @throws {Error}
 */
ProcessEnvConfigEnvironment.prototype.set = function(key, value) { // eslint-disable-line
    throwNotAllowedError();
};

/**
 * @override
 * @throws {Error}
 */
ProcessEnvConfigEnvironment.prototype.setAll = function(map) { // eslint-disable-line
    throwNotAllowedError();
};

/**
 * @override
 */
ProcessEnvConfigEnvironment.prototype.keys = function() {
    return _.keys(this.getAll());
};

/**
 * @override
 */
ProcessEnvConfigEnvironment.prototype.get = function(key, defaultValue) {
    return _.result(this.getAll(), key, defaultValue);
};

/**
 * @override
 * @throws {Error}
 */
ProcessEnvConfigEnvironment.prototype.clear = function() {
    throwNotAllowedError();
};

/**
 * @override
 */
ProcessEnvConfigEnvironment.prototype.getAll = function() {
    return process.env;
};

/**
 * @private
 * @constant
 * @type {ProcessEnvConfigEnvironment}
 */
var INSTANCE = new ProcessEnvConfigEnvironment();

/**
 * @module webpack-config/lib/processEnvConfigEnvironment
 * @returns {ProcessEnvConfigEnvironment}
 */
module.exports = ProcessEnvConfigEnvironment;
module.exports.INSTANCE = INSTANCE;

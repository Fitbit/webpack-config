'use strict';

var _ = require('lodash');

/**
 * @private
 * @constant
 * @type {Object}
 */
var DEFAULT_VARIABLES = {
    /**
     * Returns `process.env.WEBPACK_ENV || process.env.NODE_ENV`
     * @function
     * @returns {String}
     */
    env: function() {
        return this.WEBPACK_ENV || this.NODE_ENV;
    }
};

/**
 * Adds `process.env` to `variables` by default
 * @class
 * @alias ConfigEnvironment
 * @param {...Object} arguments
 * @constructor
 */
function ConfigEnvironment() {
    var args = _.flatten(_.toArray(arguments), true);

    this.reset();
    this.set(args);
}

/**
 * Adds custom `variables`
 * @param {...Object} arguments
 */
ConfigEnvironment.prototype.set = function() {
    var args = _.flatten(_.toArray(arguments), true);

    args.forEach(function(variables) {
        this.variables = _.merge(this.variables, variables);
    }, this);
};

/**
 * Gets keys
 * @returns {String[]}
 */
ConfigEnvironment.prototype.keys = function() {
    return _.keys(this.variables);
};

/**
 * Gets value from `variables` or `process.env` as fallback
 * @param {String} key
 * @returns {*}
 */
ConfigEnvironment.prototype.get = function(key) {
    var value = _.result(this.variables, key);

    if (_.isUndefined(value)) {
        value = _.result(process.env, key);
    }

    return value;
};

/**
 * Resets `variables` to default state
 */
ConfigEnvironment.prototype.reset = function() {
    this.variables = {};

    this.set(process.env, DEFAULT_VARIABLES);
};

/**
 * @module webpack-config/lib/configEnvironment
 * @returns {ConfigEnvironment}
 */
module.exports = ConfigEnvironment;

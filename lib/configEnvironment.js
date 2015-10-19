'use strict';

var _ = require('lodash');

/**
 * @private
 * @constant
 * @type {Object}
 */
var DEFAULT_VARIABLES = {
    /**
     * Returns `process.env.WEBPACK_ENV`
     * @function
     * @returns {String}
     */
    webpack_env: function() { // eslint-disable-line
        return process.env.WEBPACK_ENV;
    },

    /**
     * Returns `process.env.NODE_ENV`
     * @function
     * @returns {String}
     */
    node_env: function() { // eslint-disable-line
        return process.env.NODE_ENV;
    },

    /**
     * Returns `this.webpack_env() || this.node_env()`
     * @function
     * @returns {String}
     */
    env: function() {
        return this.webpack_env() || this.node_env();
    }
};

/**
 * @class
 * @alias ConfigEnvironment
 * @param {...Object} arguments
 * @constructor
 */
function ConfigEnvironment() {
    var args = _.flatten(_.toArray(arguments), true);

    this.variables = {};

    this.add(DEFAULT_VARIABLES, args);
}

/**
 * Adds custom `variables`
 * @param {...Object} arguments
 */
ConfigEnvironment.prototype.add = function() {
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
 * Gets value
 * @param {String} key
 * @returns {*}
 */
ConfigEnvironment.prototype.value = function(key) {
    var value = this.variables[key];

    if (_.isFunction(value)) {
        value = value.apply(this.variables);
    }

    return value;
};

/**
 * @module webpack-config/lib/configEnvironment
 * @returns {ConfigEnvironment}
 */
module.exports = ConfigEnvironment;

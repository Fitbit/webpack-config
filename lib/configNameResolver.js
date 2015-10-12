'use strict';

var _ = require('lodash'),
    CONFIG_ENVIRONMENT = require('./configEnvironment');

/**
 * @class
 * @alias ConfigNameResolver
 * @constructor
 */
function ConfigNameResolver() {
    this.patterns = {};
    this.variables = {};

    this.addVariables(CONFIG_ENVIRONMENT);
}

/**
 * Adds custom `variables`
 * @param {...Object} arguments
 */
ConfigNameResolver.prototype.addVariables = function() {
    var args = _.flatten(_.toArray(arguments), true);

    args.forEach(function(variables) {
        this.variables = _.merge(this.variables, variables);
    }, this);
};

/**
 * Resolves `filename`
 * @param {String} filename
 * @returns {String}
 */
ConfigNameResolver.prototype.resolve = function(filename) {
    Object.keys(this.variables).forEach(function(key) {
        var pattern = this.patterns[key];

        if (!pattern) {
            pattern = new RegExp(_.escapeRegExp('[' + key + ']'));

            this.patterns[key] = pattern;
        }

        var value = this.variables[key];

        if (_.isFunction(value)) {
            value = value.apply(this.variables);
        }

        filename = filename.replace(pattern, value);
    }, this);

    return filename;
};

/**
 * @static
 * @property {ConfigNameResolver}
 */
ConfigNameResolver.INSTANCE = new ConfigNameResolver();

/**
 * @module webpack-config/lib/configNameResolver
 * @returns {ConfigNameResolver}
 */
module.exports = ConfigNameResolver;

'use strict';

var _ = require('lodash');

/**
 * @class
 * @alias ConfigNameResolver
 * @param {ConfigEnvironment} environment
 * @constructor
 */
function ConfigNameResolver(environment) {
    this.environment = environment;
    this.patterns = {};
}

/**
 * Resolves `filename`
 * @param {String} filename
 * @returns {String}
 */
ConfigNameResolver.prototype.resolve = function(filename) {
    this.environment.keys().forEach(function(key) {
        var pattern = this.patterns[key];

        if (!pattern) {
            pattern = new RegExp(_.escapeRegExp('[' + key + ']'));

            this.patterns[key] = pattern;
        }

        var value = this.environment.get(key);

        filename = filename.replace(pattern, value);
    }, this);

    return filename;
};

/**
 * @module webpack-config/lib/configNameResolver
 * @returns {ConfigNameResolver}
 */
module.exports = ConfigNameResolver;

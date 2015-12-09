'use strict';

var util = require('util'),
    ConfigNameResolver = require('./configNameResolver'),
    PatternCache = require('./patternCache');

/**
 * @private
 * @type {PatternCache}
 */
var PATTERN_CACHE = PatternCache.INSTANCE;

/**
 * @alias DefaultConfigNameResolver
 * @class
 * @implements {ConfigNameResolver}
 * @constructor
 * @param {ConfigEnvironment} environment
 */
function DefaultConfigNameResolver(environment) {
    this.environment = environment;
}

util.inherits(DefaultConfigNameResolver, ConfigNameResolver);

/**
 * @override
 */
DefaultConfigNameResolver.prototype.resolveName = function(filename) {
    this.environment.keys().forEach(function(key) {
        var pattern = PATTERN_CACHE.getOrCompile(key),
            value = this.environment.get(key);

        filename = filename.replace(pattern, value);
    }, this);

    return filename;
};

/**
 * @module webpack-config/lib/defaultConfigNameResolver
 * @returns {DefaultConfigNameResolver}
 */
module.exports = DefaultConfigNameResolver;

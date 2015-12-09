'use strict';

var _ = require('lodash');
/**
 * @private
 * @alias PatternCache
 * @class
 * @constructor
 */
function PatternCache() {
    this.cache = {};
}

/**
 * Gets or compiles `pattern`
 * @param {String} pattern
 * @returns {RegExp}
 */
PatternCache.prototype.getOrCompile = function(pattern) {
    var compiledPattern = this.cache[pattern];

    if (!compiledPattern) {
        compiledPattern = new RegExp(_.escapeRegExp('[' + pattern + ']'));

        this.cache[pattern] = compiledPattern;
    }

    return compiledPattern;
};

/**
 * @constant
 * @private
 * @type {PatternCache}
 */
var INSTANCE = new PatternCache();

/**
 * @private
 * @module webpack-config/lib/patternCache
 * @returns {PatternCache}
 */
module.exports = PatternCache;
module.exports.INSTANCE = INSTANCE;

'use strict';

var _ = require('lodash');

/**
 * @constant
 * @private
 * @type {String}
 */
var BEGIN_TAG = '[';

/**
 * @constant
 * @private
 * @type {String}
 */
var END_TAG = ']';

/**
 * @private
 * @alias PatternCache
 * @class
 * @constructor
 */
function PatternCache() {
    this.caches = {};
}

/**
 * Gets or compiles `pattern`
 * @param {String} pattern
 * @returns {RegExp}
 */
PatternCache.prototype.getOrCompile = function(pattern) {
    var compiledPattern = this.caches[pattern];

    if (!compiledPattern) {
        compiledPattern = this.compile(pattern);

        this.caches[pattern] = compiledPattern;
    }

    return compiledPattern;
};

/**
 * @private
 * @param {String} pattern
 * @returns {RegExp}
 */
PatternCache.prototype.compile = function(pattern) {
    return new RegExp(_.escapeRegExp(BEGIN_TAG + pattern + END_TAG));
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

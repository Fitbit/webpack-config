'use strict';

var util = require('util'),
    ConfigFinder = require('./configFinder'),
    ClosestConfigFinderStrategy = require('./closestConfigFinderStrategy');

/**
 * @class
 * @alias DefaultConfigFinder
 * @constructor
 * @implements {ConfigFinder}
 * @param {ConfigFinderStrategy} closestStrategy
 */
function DefaultConfigFinder(closestStrategy) {
    this.closestStrategy = closestStrategy;
}

util.inherits(DefaultConfigFinder, ConfigFinder);

/**
 * @override
 */
DefaultConfigFinder.prototype.findClosestConfig = function(filename) {
    return this.closestStrategy.findConfig(filename);
};

/**
 * @private
 * @constant
 * @type {DefaultConfigFinder}
 */
var INSTANCE = new DefaultConfigFinder(ClosestConfigFinderStrategy.INSTANCE);

/**
 * @module webpack-config/lib/defaultConfigFinder
 * @returns {DefaultConfigFinder}
 */
module.exports = DefaultConfigFinder;
module.exports.INSTANCE = INSTANCE;

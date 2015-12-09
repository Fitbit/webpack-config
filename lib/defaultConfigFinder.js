'use strict';

var util = require('util'),
    ConfigFinder = require('./configFinder');

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
 * @module webpack-config/lib/defaultConfigFinder
 * @returns {DefaultConfigFinder}
 */
module.exports = DefaultConfigFinder;

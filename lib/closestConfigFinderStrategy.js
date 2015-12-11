'use strict';

var _ = require('lodash'),
    util = require('util'),
    fs = require('fs'),
    path = require('path'),
    ConfigFinderStrategy = require('./configFinderStrategy'),
    DefaultConfigLoader = require('./defaultConfigLoader'),
    DefaultConfigPathResolver = require('./defaultConfigPathResolver');

/**
 * @alias ClosestConfigFinderStrategy
 * @class
 * @constructor
 * @implements {ConfigFinderStrategy}
 * @param {ConfigLoader} loader
 * @param {ConfigPathResolver} pathResolver
 */
function ClosestConfigFinderStrategy(loader, pathResolver) {
    this.loader = loader;
    this.pathResolver = pathResolver;
}

util.inherits(ClosestConfigFinderStrategy, ConfigFinderStrategy);

/**
 * @private
 * @param {String} filename
 * @param {String[]} visited
 * @returns {Config|Config[]}
 */
ClosestConfigFinderStrategy.prototype.findClosestConfig = function(filename, visited) {
    if (_.includes(visited, filename)) {
        return null;
    }

    filename = this.resolvePath(filename);

    visited.push(filename);

    if (fs.existsSync(filename)) {
        return this.loadConfig(filename);
    }

    var dirname = path.dirname(filename),
        paths = dirname.split(path.sep),
        basename = path.basename(filename);

    dirname = paths.slice(0, paths.length - 1).join(path.sep);
    filename = path.join(dirname, basename);

    return this.findClosestConfig(filename, visited);
};

/**
 * @private
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ClosestConfigFinderStrategy.prototype.loadConfig = function(filename) {
    return this.loader.loadConfig(filename);
};

/**
 * @private
 * @param {String} filename
 * @returns {String}
 */
ClosestConfigFinderStrategy.prototype.resolvePath = function(filename) {
    return this.pathResolver.resolvePath(filename);
};

/**
 * @override
 */
ClosestConfigFinderStrategy.prototype.findConfig = function(filename) {
    return this.findClosestConfig(filename, []);
};

/**
 * @private
 * @constant
 * @type {ClosestConfigFinderStrategy}
 */
var INSTANCE = new ClosestConfigFinderStrategy(DefaultConfigLoader.INSTANCE, DefaultConfigPathResolver.INSTANCE);

/**
 * @module webpack-config/lib/closestConfigFinderStrategy
 * @returns {ClosestConfigFinderStrategy}
 */
module.exports = ClosestConfigFinderStrategy;
module.exports.INSTANCE = INSTANCE;

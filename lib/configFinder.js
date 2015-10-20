'use strict';

var fs = require('fs'),
    path = require('path');

/**
 * @class
 * @alias ConfigFinder
 * @constructor
 * @param {ConfigLoader} loader
 * @param {ConfigPathResolver} pathResolver
 */
function ConfigFinder(loader, pathResolver) {
    this.loader = loader;
    this.pathResolver = pathResolver;
}

/**
 * Walks thought directories and tries to find config under current directory
 * @private
 * @param {String} filename
 * @param {String[]} visited
 * @returns {Config|Config[]}
 */
ConfigFinder.prototype.walk = function(filename, visited) {
    if (visited.indexOf(filename) >= 0) {
        return null;
    }

    filename = this.pathResolver.resolve(filename);

    visited.push(filename);

    if (fs.existsSync(filename)) {
        return this.loader.load(filename);
    }

    var dirname = path.dirname(filename),
        paths = dirname.split(path.sep),
        basename = path.basename(filename);

    dirname = paths.slice(0, paths.length - 1).join(path.sep);
    filename = path.join(dirname, basename);

    return this.walk(filename, visited);
};

/**
 * Finds closest config
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigFinder.prototype.closest = function(filename) {
    return this.walk(filename, []);
};

/**
 * @module webpack-config/lib/configFinder
 * @returns {ConfigFinder}
 */
module.exports = ConfigFinder;

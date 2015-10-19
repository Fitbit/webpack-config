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
 * Finds closest config
 * @param {String} filename
 * @returns {Config|Config[]}
 */
ConfigFinder.prototype.closest = function(filename) {
    var basename = path.basename(filename);

    if (filename === basename) {
        return null;
    }

    filename = this.pathResolver.resolve(filename);

    if (fs.existsSync(filename)) {
        return this.loader.load(filename);
    }

    var dirname = path.dirname(filename),
        paths = dirname.split(path.sep);

    dirname = paths.slice(0, paths.length - 1).join(path.sep);
    filename = path.join(dirname, basename);

    return this.closest(filename);
};

/**
 * @module webpack-config/lib/configFinder
 * @returns {ConfigFinder}
 */
module.exports = ConfigFinder;

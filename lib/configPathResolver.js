'use strict';

var path = require('path');

/**
 * @class
 * @alias ConfigPathResolver
 * @constructor
 * @param {ConfigNameResolver} nameResolver
 */
function ConfigPathResolver(nameResolver) {
    this.nameResolver = nameResolver;
}

/**
 * Resolves path
 * @param {String} filename
 * @returns {String}
 */
ConfigPathResolver.prototype.resolve = function(filename) {
    filename = this.nameResolver.resolve(filename);

    try {
        filename = require.resolve(filename);
    } catch(e) {
        filename = path.resolve(filename);
    }

    return filename;
};

/**
 * @module webpack-config/lib/configPathResolver
 * @returns {ConfigPathResolver}
 */
module.exports = ConfigPathResolver;

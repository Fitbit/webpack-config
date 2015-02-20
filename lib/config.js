'use strict';

var path = require('path'),
    util = require('./util');

var CONFIG_FILENAME = 'webpack.config.js';

/**
 * @class
 * @constructor
 * @classdesc Represents webpack config
 * @param {Object} attributes - Attributes (please see {@link http://webpack.github.io/docs/configuration.html webpack.github.io})
 */
function Config(attributes) {
    this.merge(attributes);
}

/**
 * Merges attributes
 * @param {Object} attributes - Attributes
 * @returns {Config}
 */
Config.prototype.merge = function(attributes) {
    util.merge(this, attributes);

    return this;
};

/**
 * Creates a new config and merges attributes
 * @param {Object} attributes - Attributes
 * @returns {Config}
 * */
Config.prototype.extend = function(attributes) {
    return new Config(this).merge(attributes);
};

/**
 * Creates new config form object
 * @param {Object} attributes - Attributes
 * @returns {Config}
 */
Config.fromObject = function(attributes) {
    return new Config(attributes);
};

/**
 * Loads config from `process.cwd()`
 * @param {String} [basename=`webpack.config.js`] - Config file name
 * @param {Boolean} [cached=`true`] - Use cache or not
 * @returns {Config}
 */
Config.fromCwd = function(basename, cached) {
    return Config.fromDirectory(process.cwd(), basename, cached);
};

/**
 * Loads config from directory
 * @param {String} dirname - Directory name
 * @param {String} [basename=`webpack.config.js`] - Config file name
 * @param {Boolean} [cached=`true`] - Use cache or not
 * @returns {Config}
 */
Config.fromDirectory = function(dirname, basename, cached) {
    if (util.isBoolean(basename)) { cached = basename; }
    if (!util.isString(basename)) { basename = CONFIG_FILENAME; }

    var filename = path.join(dirname, basename);

    return Config.fromFile(filename, cached);
};

/**
 * Loads config from file
 * @param {String} filename - File name
 * @param {Boolean} [cached=`true`] - Use cache or not
 * @returns {Config}
 */
Config.fromFile = function(filename, cached) {
    var attributes = util.load(filename, cached);

    return Config.fromObject(attributes);
};

/**
 * Finds closest config
 * @param {String} dirname - Directory name
 * @param {String} [basename=`webpack.config.js`] - Config file name
 * @returns {String} File path
 */
Config.closest = function(dirname, basename) {
    if (!util.isString(basename)) { basename = CONFIG_FILENAME; }

    return util.find(dirname, basename);
};

module.exports = Config;
module.exports.CONFIG_FILENAME = CONFIG_FILENAME;

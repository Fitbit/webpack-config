'use strict';

var path = require('path'),
    util = require('./util');

var CONFIG_FILENAME = 'webpack.config.js';

/**
 * @class
 * @constructor
 * @classdesc Represents webpack config
 * @param {Object} options - Options (please see {@link http://webpack.github.io/docs/configuration.html webpack.github.io})
 */
function Config(options) {
    this.merge(options);
}

/**
 * Merges options
 * @param {Object} options - Options
 * @returns {Config}
 */
Config.prototype.merge = function(options) {
    util.merge(this, options);

    return this;
};

/**
 * Creates a new config and merges options
 * @param {Object} options - Options
 * @returns {Config}
 * */
Config.prototype.extend = function(options) {
    return new Config(this).merge(options);
};

/**
 * @property {Boolean} - Use cache or not
 */
Config.useCache = true;

/**
 * Creates new config form object
 * @param {Object} options - Options
 * @returns {Config}
 */
Config.fromObject = function(options) {
    return new Config(options);
};

/**
 * Loads config from `process.cwd()`
 * @param {String} [basename=`webpack.config.js`] - Config file name
 * @returns {Config}
 */
Config.fromCwd = function(basename) {
    return Config.fromDirectory(process.cwd(), basename);
};

/**
 * Loads config from directory
 * @param {String} dirname - Directory name
 * @param {String} [basename=`webpack.config.js`] - Config file name
 * @returns {Config}
 */
Config.fromDirectory = function(dirname, basename) {
    if (!basename) { basename = CONFIG_FILENAME; }

    var filename = path.join(dirname, basename);

    return Config.fromFile(filename);
};

/**
 * Loads config from file
 * @param {String} filename - File name
 * @returns {Config}
 */
Config.fromFile = function(filename) {
    var options = util.load(filename, Config.useCache);

    return Config.fromObject(options);
};

/**
 * Finds closest config
 * @param {String} dirname - Directory name
 * @param {String} [basename=`webpack.config.js`] - Config file name
 * @returns {String} File path
 */
Config.closest = function(dirname, basename) {
    if (!basename) { basename = CONFIG_FILENAME; }

    return util.find(dirname, basename);
};

module.exports = Config;
module.exports.CONFIG_FILENAME = CONFIG_FILENAME;

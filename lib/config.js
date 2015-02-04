'use strict';

var path = require('path'),
    fs = require('fs'),
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
 * @param attributes {Object} - Attributes
 * @returns {Config}
 */
Config.prototype.merge = function(attributes) {
    util.merge(this, attributes);

    return this;
};

/**
 * Creates a new config and merges attributes
 * @param attributes {Object} - Attributes
 * @returns {Config}
 * */
Config.prototype.extend = function(attributes) {
    return new Config(this).merge(attributes);
};

/**
 * Creates new config form attributes
 * @param attributes {Object} - Attributes
 * @returns {Config}
 */
Config.from = function(attributes) {
    return new Config(attributes);
};

/**
 * Loads config from directory or file
 * @param filename [filename=`process.cwd()`] {String} - Directory or file
 * @param cached [cached=`true`] {Boolean} - Load from cache or not
 * @returns {Config}
 */
Config.load = function(filename, cached) {
    if (filename) {
        if (fs.lstatSync(filename).isDirectory()) {
            filename = path.join(filename, CONFIG_FILENAME);
        }
    } else {
        filename = path.join(process.cwd(), CONFIG_FILENAME);
    }

    var attributes = util.load(filename, cached);

    return Config.from(attributes);
};

/**
 * Finds closest config
 * @param dirname {String} Directory
 * @returns {String} File name
 */
Config.closest = function(dirname) {
    return util.find(dirname, CONFIG_FILENAME);
};

module.exports = Config;
module.exports.CONFIG_FILENAME = CONFIG_FILENAME;

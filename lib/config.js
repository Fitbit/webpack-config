'use strict';

var path = require('path'),
    fs = require('fs'),
    util = require('./util');

var CONFIG_FILENAME = 'webpack.config.js';

var defaultAttributes = {
    context: process.cwd(),
    entry: {},
    output: {},
    module: {
        loaders: []
    },
    resolve: {
        root: [],
        modulesDirectories: []
    },
    plugins: []
};

/**
 * @class
 * @constructor
 * @classdesc Represents webpack config
 * @param {Object} - Attributes (please see {@link http://webpack.github.io/docs/configuration.html webpack.github.io})
 */
function Config(attributes) {
    this.merge(defaultAttributes);
    this.merge(attributes);
}

/**
 * Merges attributes
 * @param attributes {Object} - Attributes
 * @returns {Config}
 */
Config.prototype.merge = function(attributes) {
    if (!attributes) { attributes = {}; }

    util.merge(this, attributes);

    return this;
};

/**
 * Creates a new config and merges attributes
 * @param attributes {Object} - Attributes
 * @returns {Config}
  * */
Config.prototype.extend = function(attributes) {
    if (!attributes) { attributes = {}; }

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
 * @param filename [filename=`process.cwd()`] {Object} - Attributes
 * @returns {Config}
 */
Config.load = function(filename) {
    if (filename) {
        if (fs.lstatSync(filename).isDirectory()) {
            filename = path.join(filename, CONFIG_FILENAME);
        }
    } else {
        filename = path.join(process.cwd(), CONFIG_FILENAME);
    }

    filename = path.resolve(filename);

    var attributes = require(filename);

    return Config.from(attributes);
};

module.exports = Config;
module.exports.CONFIG_FILENAME = CONFIG_FILENAME;

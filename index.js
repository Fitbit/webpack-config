'use strict';

var path = require('path'),
    _ = require('lodash'),
    util = require('./lib/util'),
    Config = require('./lib/config'),
    MultiConfig = require('./lib/multiConfig');

/**
 * @module webpack-config
 * @example
 * `webpack.config.js`
 *
 * ``` javascript
 * {"gitdown": "include", "file": "samples/webpack.config.js"}
 * ```
 * @example
 * `polyfills/webpack.config.js`
 *
 * ``` javascript
 * {"gitdown": "include", "file": "samples/polyfills/webpack.config.js"}
 * ```
 */
module.exports = {
    /**
     * @const {String} - `webpack.config.js`
     */
    CONFIG_FILENAME: 'webpack.config.js',
    /**
     * @property {Config}
     * @readonly
     */
    Config: Config,
    /**
     * @property {MultiConfig}
     * @readonly
     */
    MultiConfig: MultiConfig,
    /**
     * Use cache or not
     * @property {Boolean}
     */
    useCache: true,
    /**
     * Creates new config form object
     * @param {Object} options - Options
     * @returns {Config|MultiConfig}
     */
    fromObject: function(options) {
        return _.isArray(options) ? new MultiConfig(options) : new Config(options);
    },
    /**
     * Loads config from `process.cwd()`
     * @param {String} [basename=webpack.config.js] - Config file name
     * @returns {Config|MultiConfig}
     */
    fromCwd: function(basename) {
        return this.fromDirectory(process.cwd(), basename);
    },
    /**
     * Loads config from directory
     * @param {String} dirname - Directory name
     * @param {String} [basename=webpack.config.js] - Config file name
     * @returns {Config|MultiConfig}
     */
    fromDirectory: function(dirname, basename) {
        if (!basename) { basename = this.CONFIG_FILENAME; }

        var filename = path.join(dirname, basename);

        return this.fromFile(filename);
    },
    /**
     * Loads config from file
     * @param {String} filename - File name
     * @returns {Config|MultiConfig}
     */
    fromFile: function(filename) {
        var options = util.load(filename, this.useCache);

        return this.fromObject(options);
    },
    /**
     * Finds closest config
     * @param {String} dirname - Directory name
     * @param {String} [basename=webpack.config.js] - Config file name
     * @returns {String} File path
     */
    closest: function(dirname, basename) {
        if (!basename) { basename = this.CONFIG_FILENAME; }

        return util.find(dirname, basename);
    }
};

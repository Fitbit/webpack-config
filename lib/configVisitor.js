'use strict';

var _ = require('lodash'),
    ConfigLoader = require('./configLoader'),
    ConfigPathResolver = require('./configPathResolver');

var DEFAULT_FIELD_NAME = 'extend';

/**
 * Default config transform which just returns original `options`
 * @param {Config} config
 * @private
 * @returns {Config}
 */
function defaultTransform(config) {
    return config;
}

/**
 * @class
 * @alias ConfigVisitor
 * @constructor
 * @param {ConfigLoader} loader
 * @param {ConfigPathResolver} pathResolver
 * @param {String=} fieldName
 */
function ConfigVisitor(loader, pathResolver, fieldName) {
    this.loader = loader;
    this.pathResolver = pathResolver;
    this.fieldName = fieldName;
}

/**
 * Converts to `includes` options
 * @private
 * @param {String|String[]|Object<String,Function>|Object<String,Boolean>} obj
 * @returns {Object<String,Function>}
 */
ConfigVisitor.prototype.toIncludes = function(obj) {
    var arr = [];

    if (_.isArray(obj)) { // NOTE (@mdreizin): ['./webpack.config.js']
        arr = _.map(obj, function (filename) {
            return {
                filename: filename
            };
        });
    } else if (_.isString(obj)) { // NOTE (@mdreizin): './webpack.config.js'
        arr = [{
            filename: obj
        }];
    } else if (_.isObject(obj)) { // NOTE (@mdreizin): {'./webpack.config.js':Function|Boolean}
        arr = _.keys(obj).map(function (filename) {
            return {
                filename: filename,
                transform: obj[filename]
            };
        });
    }

    return _.reduce(arr, function (acc, x) {
        var key = this.pathResolver.resolve(x.filename);

        if (_.isBoolean(x.transform)) { // NOTE (@mdreizin): {'./webpack.config.js':Boolean}
            if (x.transform === true) {
                acc[key] = defaultTransform;
            }
        } else { // NOTE (@mdreizin): {'./webpack.config.js':Function}
            acc[key] = x.transform || defaultTransform;
        }

        return acc;
    }.bind(this), {});
};

/**
 * Walks recursively through `this.fieldName` property and builds `visited` configs
 * @private
 * @param {Object} obj
 * @param {Object<String,Object>} visited
 */
ConfigVisitor.prototype.walk = function(obj, visited) {
    var field = obj && obj[this.fieldName];

    if (!_.isUndefined(field)) {
        var includesOptions = this.toIncludes(field);

        _.keys(includesOptions).filter(function (filename, index, arr) {
            return arr.indexOf(filename) === index; // NOTE (@mdreizin): Skip `duplicates`
        }).filter(function (filename) {
            return _.isUndefined(visited[filename]); // NOTE (@mdreizin): Skip `visited` configs
        }).forEach(function (filename) {
            var currentConfig = this.loader.load(filename),
                currentOptions = includesOptions[filename];

            if (_.isFunction(currentOptions)) {
                currentConfig = currentOptions(currentConfig);
            }

            if (!_.isObject(currentConfig)) {
                currentConfig = {};
            }

            visited[filename] = currentConfig;

            this.walk(currentConfig, visited);
        }, this);
    }
};

/**
 * Returns `visited` configs
 * @param {Object} obj
 * @returns {Object<String,Config>}
 */
ConfigVisitor.prototype.visit = function(obj) {
    if (_.isUndefined(obj)) {
        throw new Error('obj is required');
    }

    var visited = {};

    this.walk(obj, visited);

    return visited;
};

/**
 * @static
 * @property {ConfigVisitor}
 */
ConfigVisitor.INSTANCE = new ConfigVisitor(ConfigLoader.INSTANCE, ConfigPathResolver.INSTANCE, DEFAULT_FIELD_NAME);

/**
 * @module webpack-config/lib/configVisitor
 * @returns {ConfigVisitor}
 */
module.exports = ConfigVisitor;

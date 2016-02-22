'use strict';

var _ = require('lodash'),
    ConfigTransformMap = require('./configTransformMap');

/**
 * @private
 * @alias ConfigTransformParameter
 * @typedef {(String[]|Object<String,Function>|Object<String,Function[]>|Object<String,Boolean>)}
 */

/**
 * @private
 * @constant
 * @type {String[]}
 */
var DEFAULT_EXCLUDE_FIELDS = ['filename'];

/**
 * Default config transform which just returns original `config`
 * @private
 * @param {Config} config
 * @returns {Config}
 */
function defaultTransform(config) {
    return config;
}

/**
 * Config transform which just removes `excludeFields` from `config`
 * @private
 * @param {String[]} excludeFields
 * @param {Config} config
 * @returns {Config}
 */
function cleanupTransform(excludeFields, config) {
    _.forEach(excludeFields, function(name) {
        delete config[name];
    });

    return config;
}

/**
 * @class
 * @alias ConfigTransformBuilder
 * @constructor
 * @param {ConfigPathResolver} pathResolver
 * @param {String[]} [excludeFields]
 */
function ConfigTransformBuilder(pathResolver, excludeFields) {
    if (!_.isArray(excludeFields)) {
        excludeFields = DEFAULT_EXCLUDE_FIELDS;
    }

    this.pathResolver = pathResolver;
    this.excludeFields = excludeFields;
    this.map = new ConfigTransformMap();
}

/**
 * @param {...ConfigTransformParameter} arguments
 */
ConfigTransformBuilder.prototype.setAll = function() {
    var args = _.flattenDeep(_.toArray(arguments));

    _.forEach(args, _.bind(function(x) {
        if (_.isString(x)) {
            this.set(x, this.createDefaultTransform());
        } else if (_.isObject(x)) {
            _.forEach(x, _.bind(function(value, key) {
                if (_.isBoolean(value)) {
                    if (value === true) {
                        this.set(key, this.createDefaultTransform());
                    }
                } else if (_.isFunction(value)) {
                    this.set(key, value);
                } else if (_.isArray(value)) {
                    this.set(key, value);
                }
            }, this));
        }
    }, this));

    return this;
};

/**
 * @param {*} key
 * @param {*} value
 */
ConfigTransformBuilder.prototype.set = function(key, value) {
    key = this.pathResolver.resolvePath(key);

    var transforms = _.flattenDeep([
        value,
        this.createCleanupTransform()
    ]);

    _.forEach(transforms, _.bind(function(transform) {
        if (!this.map.includes(key, transform)) {
            this.map.set(key, transform);
        }
    }, this));

    return this;
};

/**
 * @returns {Function}
 */
ConfigTransformBuilder.prototype.createDefaultTransform = function() {
    return defaultTransform;
};

/**
 * @returns {Function}
 */
ConfigTransformBuilder.prototype.createCleanupTransform = function() {
    if (!_.isFunction(this.cleanupTransform)) {
        this.cleanupTransform = _.partial(cleanupTransform, this.excludeFields);
    }

    return this.cleanupTransform;
};

/**
 * @returns {ConfigTransformMap}
 */
ConfigTransformBuilder.prototype.build = function() {
    return this.map.raw();
};

/**
 * @private
 * @module webpack-config/lib/configTransformBuilder
 * @returns {ConfigTransformBuilder}
 */
module.exports = ConfigTransformBuilder;
module.exports.defaultTransform = defaultTransform;
module.exports.cleanupTransform = cleanupTransform;

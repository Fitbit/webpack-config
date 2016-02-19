'use strict';

var _ = require('lodash');

/**
 * @private
 * @alias ConfigTransformRawMap
 * @typedef {Object<String,Function[]>}
 */

/**
 * @class
 * @alias ConfigTransformMap
 * @constructor
 */
function ConfigTransformMap() {
    this.map = {};
}

/**
 * @param {*} key
 * @param {...Function} value
 * @returns {ConfigTransformMap}
 */
ConfigTransformMap.prototype.set = _.rest(function(key, value) {
    value = _.filter(value, _.isFunction);

    if (!_.isEmpty(value)) {
        var map = this.map[key];

        if (!_.isArray(map)) {
            map = [];
        }

        [].push.apply(map, value);

        this.map[key] = map;
    }

    return this;
});

/**
 * @param {*} key
 * @returns {Boolean}
 */
ConfigTransformMap.prototype.has = function(key) {
    return _.has(this.map, key);
};

/**
 * @param {*} key
 * @returns {Function}
 */
ConfigTransformMap.prototype.get = function(key) {
    return _.get(this.map, key);
};

/**
 * @param {*} key
 * @param {Function} value
 * @returns {Boolean}
 */
ConfigTransformMap.prototype.includes = function(key, value) {
    var map = this.get(key) || [];

    return _.includes(map, value);
};

/**
 * @returns {ConfigTransformRawMap}
 */
ConfigTransformMap.prototype.raw = function() {
    return this.map;
};

/**
 * @private
 * @module webpack-config/lib/configTransformMap
 * @returns {ConfigTransformMap}
 */
module.exports = ConfigTransformMap;

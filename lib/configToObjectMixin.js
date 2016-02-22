'use strict';

var _ = require('lodash');

/**
 * @mixin
 * @alias ConfigToObjectMixin
 */
var ConfigToObjectMixin = {
    /**
     * Returns plain object
     * @function
     * @returns {Object}
     */
    toObject: function() {
        return _.omitBy(this, _.bind(function(val, key) {
            return !_.has(this, key);
        }, this));
    }
};

/**
 * @module webpack-config/lib/configToObjectMixin
 * @returns {ConfigToObjectMixin}
 */
module.exports = ConfigToObjectMixin;

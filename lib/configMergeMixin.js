'use strict';

var _ = require('lodash');

/**
 * @alias ConfigMergeMixin
 */
var ConfigMergeMixin = {
    /**
     * Merges options
     * @function
     * @param {Object=} options
     * @returns {Config}
     */
    merge: function(options) {
        _.merge(this, options, function (x, y) {
            if (_.isArray(x)) {
                return x.concat(y);
            }
        });

        return this;
    }
};

/**
 * @module webpack-config/lib/configMergeMixin
 * @returns {ConfigMergeMixin}
 */
module.exports = ConfigMergeMixin;

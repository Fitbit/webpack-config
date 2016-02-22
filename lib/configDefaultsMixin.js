'use strict';

var _ = require('lodash');

/**
 * @mixin
 * @alias ConfigDefaultsMixin
 */
var ConfigDefaultsMixin = {
    /**
     * Merges default options
     * @function
     * @param {...(Object|Function)} arguments
     * @returns {Config}
     */
    defaults: function() {
        var args = _.flattenDeep(_.toArray(arguments));

        _.forEach(args, _.bind(function(value) {
            var options = value;

            if (_.isFunction(value)) {
                options = value.call(this, this);
            }

            _.defaultsDeep(this, options);
        }, this));

        return this;
    }
};

/**
 * @module webpack-config/lib/configDefaultsMixin
 * @returns {ConfigDefaultsMixin}
 */
module.exports = ConfigDefaultsMixin;

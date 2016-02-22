'use strict';

var _ = require('lodash');

/**
 * @mixin
 * @alias ConfigMergeMixin
 */
var ConfigMergeMixin = {
    /**
     * Merges options
     * @function
     * @param {...(Object|Function)} arguments
     * @returns {Config}
     */
    merge: function() {
        var args = _.flattenDeep(_.toArray(arguments));

        _.forEach(args, _.bind(function(value) {
            var options = value;

            if (_.isFunction(value)) {
                options = value.call(this, this);
            }

            _.mergeWith(this, options, function (x, y) { // eslint-disable-line consistent-return
                if (_.isArray(x)) {
                    return x.concat(y);
                }
            });
        }, this));

        return this;
    }
};

/**
 * @module webpack-config/lib/configMergeMixin
 * @returns {ConfigMergeMixin}
 */
module.exports = ConfigMergeMixin;

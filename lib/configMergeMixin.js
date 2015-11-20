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
        var args = _.flatten(_.toArray(arguments), true);

        args.forEach(function(value) {
            var options = value;

            if (_.isFunction(value)) {
                options = value.call(this);
            }

            _.merge(this, options, function (x, y) {
                if (_.isArray(x)) {
                    return x.concat(y);
                }
            });
        }, this);

        return this;
    }
};

/**
 * @module webpack-config/lib/configMergeMixin
 * @returns {ConfigMergeMixin}
 */
module.exports = ConfigMergeMixin;

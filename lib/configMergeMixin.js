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

        args.forEach(function(options) {
            var value = options;

            if (_.isFunction(options)) {
                options = _.callback(options, this);

                value = options();
            }

            _.merge(this, value, function (x, y) {
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

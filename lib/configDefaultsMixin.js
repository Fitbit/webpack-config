'use strict';

var _ = require('lodash');

var defaults = _.partialRight(_.merge, function recursiveDefaults() {
    if (_.isArray(arguments[0]) || _.isDate(arguments[0])) {
        return arguments[0];
    }

    return _.merge(arguments[0], arguments[1], recursiveDefaults);
});

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
        var args = _.flatten(_.toArray(arguments), true);

        args.forEach(function(value) {
            var options = value;

            if (_.isFunction(value)) {
                options = value.call(this);
            }

            defaults(this, options);
        }, this);

        return this;
    }
};

/**
 * @module webpack-config/lib/configDefaultsMixin
 * @returns {ConfigDefaultsMixin}
 */
module.exports = ConfigDefaultsMixin;

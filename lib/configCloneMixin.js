'use strict';

/**
 * @mixin
 * @alias ConfigCloneMixin
 */
var ConfigCloneMixin = {
    /**
     * Creates a new config
     * @function
     * @returns {Config}
     */
    clone: function() {
        return new this.constructor().merge(this.toObject());
    }
};

/**
 * @module webpack-config/lib/configCloneMixin
 * @returns {ConfigCloneMixin}
 */
module.exports = ConfigCloneMixin;

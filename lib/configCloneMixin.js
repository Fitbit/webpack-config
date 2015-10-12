'use strict';

var Config = require('./config'),
    ConfigMergeMixin = require('./configMergeMixin'),
    ConfigToObjectMixin = require('./configToObjectMixin');

/**
 * @alias ConfigCloneMixin
 */
var ConfigCloneMixin = {
    requires: [
        ConfigMergeMixin,
        ConfigToObjectMixin
    ],
    /**
     * Creates a new config
     * @function
     * @returns {Config}
     */
    clone: function() {
        return new Config().merge(this.toObject());
    }
};

/**
 * @module webpack-config/lib/configCloneMixin
 * @returns {ConfigCloneMixin}
 */
module.exports = ConfigCloneMixin;

'use strict';

var _ = require('lodash'),
    ConfigDefaultsMixin = require('./configDefaultsMixin'),
    ConfigMergeMixin = require('./configMergeMixin'),
    ConfigCloneMixin = require('./configCloneMixin'),
    ConfigExtendMixin = require('./configExtendMixin'),
    ConfigToObjectMixin = require('./configToObjectMixin');

/**
 * @private
 * @constant
 * @type {Object[]}
 */
var DEFAULT_MIXIN = [
    ConfigDefaultsMixin,
    ConfigMergeMixin,
    ConfigCloneMixin,
    ConfigExtendMixin,
    ConfigToObjectMixin
];

/**
 * @alias Config
 * @class
 * @constructor
 * @mixes ConfigDefaultsMixin
 * @mixes ConfigMergeMixin
 * @mixes ConfigCloneMixin
 * @mixes ConfigExtendMixin
 * @mixes ConfigToObjectMixin
 */
function Config() {}

DEFAULT_MIXIN.forEach(function(mixin) {
    _.assign(Config.prototype, mixin);
});

/**
 * @module webpack-config/lib/config
 * @returns {Config}
 */
module.exports = Config;

'use strict';

var ConfigDefaultsMixin = require('./configDefaultsMixin'),
    ConfigMergeMixin = require('./configMergeMixin'),
    ConfigCloneMixin = require('./configCloneMixin'),
    ConfigExtendMixin = require('./configExtendMixin'),
    ConfigToObjectMixin = require('./configToObjectMixin');

/**
 * @constant
 * @alias CONFIG_MIXIN
 * @type {Object[]}
 */
var CONFIG_MIXIN = [
    ConfigDefaultsMixin,
    ConfigMergeMixin,
    ConfigCloneMixin,
    ConfigExtendMixin,
    ConfigToObjectMixin
];

/**
 * @module webpack-config/lib/configMixin
 * @returns {CONFIG_MIXIN}
 */
module.exports = CONFIG_MIXIN;

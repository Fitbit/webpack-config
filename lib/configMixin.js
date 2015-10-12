'use strict';

var ConfigDefaultsMixin = require('./configDefaultsMixin'),
    ConfigMergeMixin = require('./configMergeMixin'),
    ConfigCloneMixin = require('./configCloneMixin'),
    ConfigExtendMixin = require('./configExtendMixin'),
    ConfigToObjectMixin = require('./configToObjectMixin');

/**
 * @alias ConfigMixin
 * @type {Object[]}
 */
var ConfigMixin = [
    ConfigDefaultsMixin,
    ConfigMergeMixin,
    ConfigCloneMixin,
    ConfigExtendMixin,
    ConfigToObjectMixin
];

/**
 * @module webpack-config/lib/configMixin
 * @returns {ConfigMixin}
 */
module.exports = ConfigMixin;

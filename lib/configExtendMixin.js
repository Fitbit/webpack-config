'use strict';

var _ = require('lodash'),
    ConfigVisitor = require('./configVisitor'),
    ConfigMergeMixin = require('./configMergeMixin');

var configVisitor = ConfigVisitor.INSTANCE;

/**
 * @alias ConfigExtendMixin
 */
var ConfigExtendMixin = {
    requires: [
        ConfigMergeMixin
    ],
    /**
     * Extends config using external ones
     * @function
     * @param {String|String[]|Object<String,Function>|Object<String,Boolean>} options
     * @returns {Config}
     */
    extend: function(options) {
        if (_.isUndefined(options)) {
            throw new Error('options are required');
        }

        var obj = {};

        obj[configVisitor.fieldName] = options;

        var visited = configVisitor.visit(obj);

        _.keys(visited).reverse().forEach(function (filename) {
            var currentOptions = visited[filename].toObject();

            // NOTE (@mdreizin): Prevent merging of `this.fieldName` property
            delete currentOptions[configVisitor.fieldName];

            this.merge(currentOptions);
        }, this);

        this.merge(obj);

        return this;
    }
};

/**
 * @module webpack-config/lib/configExtendMixin
 * @returns {ConfigExtendMixin}
 */
module.exports = ConfigExtendMixin;

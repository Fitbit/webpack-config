'use strict';

var _ = require('lodash'),
    Config = require('./config'),
    ConfigVisitor = require('./configVisitor'),
    ConfigMergeMixin = require('./configMergeMixin');

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
        var configVisitor = Config.visitor;

        if (configVisitor instanceof ConfigVisitor) {
            var obj = {},
                excludeFields = Config.visitor.excludeFields;

            obj[configVisitor.extendField] = options;

            var visited = configVisitor.visit(obj);

            _.keys(visited).reverse().forEach(function (filename) {
                var currentOptions = visited[filename].toObject();

                excludeFields.forEach(function(field) {
                    delete currentOptions[field];
                });

                this.merge(currentOptions);
            }, this);

            this.merge(obj);
        }

        return this;
    }
};

/**
 * @module webpack-config/lib/configExtendMixin
 * @returns {ConfigExtendMixin}
 */
module.exports = ConfigExtendMixin;

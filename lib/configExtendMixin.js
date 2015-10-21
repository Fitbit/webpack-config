'use strict';

var _ = require('lodash'),
    ConfigVisitor = require('./configVisitor');

/**
 * @mixin
 * @alias ConfigExtendMixin
 */
var ConfigExtendMixin = {
    /**
     * Extends config
     * @function
     * @param {String|String[]|Object<String,Function>|Object<String,Boolean>} options
     * @returns {Config}
     */
    extend: function(options) {
        var configVisitor = this.constructor.visitor;

        if (configVisitor instanceof ConfigVisitor) {
            var obj = {},
                excludeFields = this.constructor.visitor.excludeFields;

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

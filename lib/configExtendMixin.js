'use strict';

var _ = require('lodash'),
    ConfigVisitor = require('./configVisitor');

/**
 * Extend options
 * @alias ExtendOptions
 * @typedef {(String|String[]|Object<String,Function>|Object<String,Boolean>)}
 */

/**
 * @mixin
 * @alias ConfigExtendMixin
 */
var ConfigExtendMixin = {
    /**
     * Extends config
     * @function
     * @param {...ExtendOptions} arguments
     * @returns {Config}
     */
    extend: function() {
        var configVisitor = this.constructor.visitor;

        if (configVisitor instanceof ConfigVisitor) {
            var visited = configVisitor.visit.apply(configVisitor, arguments);

            _.forEach(visited, function (value) {
                this.merge(value);
            }, this);
        }

        return this;
    }
};

/**
 * @module webpack-config/lib/configExtendMixin
 * @returns {ConfigExtendMixin}
 */
module.exports = ConfigExtendMixin;

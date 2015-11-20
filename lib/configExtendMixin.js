'use strict';

var _ = require('lodash'),
    ConfigVisitor = require('./configVisitor');

/**
 * Extend options
 * @alias ExtendOptions
 * @typedef {(String[]|Object<String,Function>|Object<String,Boolean>)}
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
            var args = _.flatten(_.toArray(arguments), true);

            configVisitor.visit(args, this.merge, this);
        }

        return this;
    }
};

/**
 * @module webpack-config/lib/configExtendMixin
 * @returns {ConfigExtendMixin}
 */
module.exports = ConfigExtendMixin;

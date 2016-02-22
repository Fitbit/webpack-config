'use strict';

var _ = require('lodash'),
    ConfigLoader = require('./configLoader'),
    ConfigPathResolver = require('./configPathResolver'),
    ConfigTransformInvoker = require('./configTransformInvoker'),
    ConfigTransformBuilder = require('./configTransformBuilder');

/**
 * @mixin
 * @alias ConfigExtendMixin
 */
var ConfigExtendMixin = {
    /**
     * Extends config
     * @function
     * @param {...(String[]|Object<String,Function>|Object<String,Function[]>|Object<String,Boolean>)} arguments
     * @returns {Config}
     */
    extend: function() {
        var pathResolver = this.constructor.pathResolver,
            loader = this.constructor.loader,
            canExtend = pathResolver instanceof ConfigPathResolver && loader instanceof ConfigLoader;

        if (canExtend) {
            var args = _.flattenDeep(_.toArray(arguments));

            var map = new ConfigTransformBuilder(pathResolver).setAll(args).build();

            var invoker = new ConfigTransformInvoker(loader);

            invoker.invokeAll(map, this.merge, this);
        }

        return this;
    }
};

/**
 * @module webpack-config/lib/configExtendMixin
 * @returns {ConfigExtendMixin}
 */
module.exports = ConfigExtendMixin;

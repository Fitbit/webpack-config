'use strict';

var _ = require('lodash'),
    Config = require('./config'),
    CONFIG_MIXIN = require('./configMixin');

/**
 * @class
 * @alias ConfigFactory
 * @constructor
 */
function ConfigFactory() {
    this.addMixins(CONFIG_MIXIN);
}

/**
 * Adds custom `mixins`
 * @param {...Object} arguments
 */
ConfigFactory.prototype.addMixins = function() {
    var args = _.flatten(_.toArray(arguments), true);

    args.forEach(function(mixin) {
        if (_.isArray(mixin.requires)) {
            this.addMixins(mixin.requires);
        }

        _.merge(Config.prototype, mixin);
    }, this);
};

/**
 * Creates config instance
 * @param {Object|Object[]|Function} obj
 * @returns {Config|Config[]}
 */
ConfigFactory.prototype.createInstance = function(obj) {
    if (_.isFunction(obj)) {
        obj = obj();
    }

    var config;

    if (_.isArray(obj)) {
        config = obj.map(function(x) {
            return new Config().merge(x);
        });
    } else {
        config = new Config().merge(obj);
    }

    return config;
};

/**
 * @module webpack-config/lib/configFactory
 * @returns {ConfigFactory}
 */
module.exports = ConfigFactory;

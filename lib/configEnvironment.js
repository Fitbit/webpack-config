'use strict';

/**
 * @constant
 * @alias CONFIG_ENVIRONMENT
 * @type {Object}
 */
var CONFIG_ENVIRONMENT = {
    /**
     * Returns `process.env.WEBPACK_ENV`
     * @function
     * @returns {String}
     */
    webpack_env: function() { // eslint-disable-line
        return process.env.WEBPACK_ENV;
    },
    /**
     * Returns `process.env.NODE_ENV`
     * @function
     * @returns {String}
     */
    node_env: function() { // eslint-disable-line
        return process.env.NODE_ENV;
    },
    /**
     * Returns `this.webpack_env() || this.node_env()`
     * @function
     * @returns {String}
     */
    env: function() {
        return this.webpack_env() || this.node_env();
    }
};

/**
 * @module webpack-config/lib/configEnvironment
 * @returns {CONFIG_ENVIRONMENT}
 */
module.exports = CONFIG_ENVIRONMENT;

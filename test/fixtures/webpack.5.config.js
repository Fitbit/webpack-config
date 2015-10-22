'use strict';

var WebpackConfig = require('../../index');

module.exports = new WebpackConfig().extend('./test/fixtures/webpack.4.config.js').merge({
    debug: false,
    resolve: {
        alias: {
            config: './test/fixtures/webpack.5.config.js'
        }
    }
});

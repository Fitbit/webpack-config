'use strict';

var webpack = require('webpack'),
    WebpackConfig = require('../../index');

module.exports = new WebpackConfig().extend('./test/fixtures/webpack.3.config.js').merge({
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true)
    ],
    resolve: {
        alias: {
            config: './test/fixtures/webpack.4.config.js'
        }
    }
});

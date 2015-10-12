'use strict';

var webpack = require('webpack');

module.exports = {
    debug: true,
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        alias: {
            config: './webpack.3.config.js'
        }
    }
};

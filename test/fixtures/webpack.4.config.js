'use strict';

var webpack = require('webpack');

module.exports = {
    extend: {
        './test/fixtures/webpack.3.config.js': function(config) {
            config.visited = ['./test/fixtures/webpack.3.config.js'];

            return config;
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true)
    ],
    resolve: {
        alias: {
            config: './test/fixtures/webpack.4.config.js'
        }
    }
};

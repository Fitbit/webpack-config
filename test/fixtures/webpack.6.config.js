'use strict';

var webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true)
    ]
};

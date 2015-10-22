'use strict';

var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./conf/webpack.[env].config.js');

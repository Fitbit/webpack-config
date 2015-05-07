[![NPM version](http://img.shields.io/npm/v/webpack-config.svg?style=flat)](https://www.npmjs.org/package/webpack-config) [![Travis build status](http://img.shields.io/travis/mdreizin/webpack-config/master.svg?style=flat)](https://travis-ci.org/mdreizin/webpack-config) [![Code Climate](https://codeclimate.com/github/mdreizin/webpack-config/badges/gpa.svg)](https://codeclimate.com/github/mdreizin/webpack-config) [![Dependency Status](https://david-dm.org/mdreizin/webpack-config.svg?style=flat)](https://david-dm.org/mdreizin/webpack-config) [![Dependency Status](https://david-dm.org/mdreizin/webpack-config/dev-status.svg?style=flat)](https://david-dm.org/mdreizin/webpack-config#info=devDependencies)

[webpack](https://github.com/webpack/webpack)-config
====================================================

Helps to load, extend and merge webpack configs

<h2 id="documentation">Documentation</h2>

For API docs please see the [documentation page](https://github.com/mdreizin/webpack-config/blob/master/docs/API.md)!

<h2 id="sample">Sample</h2>

`webpack.config.js`

``` javascript
'use strict';

var path = require('path'),
    webpack = require('webpack'),
    BowerPlugin = require('bower-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ComponentPlugin = require('component-webpack-plugin'),
    webpackConfig = require('webpack-config');

module.exports = webpackConfig.fromObject({
    output: {
        filename: '[name].js'
    },
    resolve: {
        root: [
            __dirname,
            path.join(__dirname, 'src', 'main', 'assets')
        ],
        modulesDirectories: [
            'node_modules',
            'bower_components',
            'custom_components'
        ]
    },
    plugins: [
        new ComponentPlugin(),
        new BowerPlugin({
            excludes: [
                /.*\.min.*/
            ]
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    ],
    module: {
        loaders: [{
            test: /\.css$/,
            exclude: /.*\.min.css/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
        }, {
            test: /\.png$/,
            loader: 'url-loader?prefix=img/&limit=5000'
        }, {
            test: /\.jpg$/,
            loader: 'url-loader?prefix=img/&limit=5000'
        }, {
            test: /\.gif$/,
            loader: 'url-loader?prefix=img/&limit=5000'
        }, {
            test: /\.woff$/,
            loader: 'url-loader?prefix=font/&limit=5000'
        }, {
            test: /\.eot$/,
            loader: 'file-loader?prefix=font/'
        }, {
            test: /\.ttf$/,
            loader: 'file-loader?prefix=font/'
        }, {
            test: /\.svg$/,
            loader: 'file-loader?prefix=font/'
        }]
    }
});

```

`polyfills/webpack.config.js`

``` javascript
'use strict';

var webpackConfig = require('webpack-config');

module.exports = webpackConfig.fromCwd().extend({
    entry: {
        vendor: [
            'consolelog',
            'es5-shim',
            'es5-shim/es5-sham',
            'es6-shim',
            'es6-shim/es6-sham',
            'json3',
            'html5shiv',
            'html5shiv/dist/html5shiv-printshiv.js',
            'respond'
        ]
    }
});

```

[webpack](https://github.com/webpack/webpack)-config
====================================================

Helps to load, extend and merge webpack configs

[![NPM](https://nodei.co/npm/webpack-config.png?downloads=true&stars=true)](https://nodei.co/npm/webpack-config/)

## Documentation

For API docs please see the [documentation page](/docs/API.md)!

## Sample

`webpack.config.js`

``` javascript
'use strict';

var path = require('path'),
    webpack = require('webpack'),
    BowerPlugin = require('bower-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ComponentPlugin = require('component-webpack-plugin'),
    WebpackConfig = require('webpack-config');

module.exports = WebpackConfig.from({
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
        new ExtractTextPlugin(path.join('[name].css')),
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

var WebpackConfig = require('webpack-config');

module.exports = WebpackConfig.load().extend({
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

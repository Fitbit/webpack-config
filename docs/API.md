<a name="module_webpack-config"></a>
#webpack-config
**Example**  
`webpack.config.js`

``` javascript
'use strict';

var path = require('path'),
    webpack = require('webpack'),
    BowerPlugin = require('bower-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    ComponentPlugin = require('component-webpack-plugin'),
    WebpackConfig = require('webpack-config');

module.exports = WebpackConfig.fromObject({
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

**Example**  
`polyfills/webpack.config.js`

``` javascript
'use strict';

var WebpackConfig = require('webpack-config');

module.exports = WebpackConfig.fromCwd().extend({
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

**Members**

* [webpack-config](#module_webpack-config)
  * [webpack-config.Config](#module_webpack-config.Config)
    * [config.merge(options)](#module_webpack-config.Config#merge)
    * [config.defaults(options)](#module_webpack-config.Config#defaults)
    * [config.extend(options)](#module_webpack-config.Config#extend)
    * [config.toPlainObject()](#module_webpack-config.Config#toPlainObject)
  * [webpack-config.MultiConfig](#module_webpack-config.MultiConfig)
    * [multiConfig.merge(options)](#module_webpack-config.MultiConfig#merge)
    * [multiConfig.defaults(options)](#module_webpack-config.MultiConfig#defaults)
    * [multiConfig.extend(options)](#module_webpack-config.MultiConfig#extend)
    * [multiConfig.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject)
  * [webpack-config.useCache](#module_webpack-config.useCache)
  * [webpack-config.fromObject(options)](#module_webpack-config.fromObject)
  * [webpack-config.fromCwd([basename])](#module_webpack-config.fromCwd)
  * [webpack-config.fromDirectory(dirname, [basename])](#module_webpack-config.fromDirectory)
  * [webpack-config.fromFile(filename)](#module_webpack-config.fromFile)
  * [webpack-config.closest(dirname, [basename])](#module_webpack-config.closest)
  * [const: webpack-config.CONFIG_FILENAME](#module_webpack-config.CONFIG_FILENAME)
  * [class: webpack-config.Config](#module_webpack-config.Config)
    * [new webpack-config.Config(options)](#new_module_webpack-config.Config)
    * [config.merge(options)](#module_webpack-config.Config#merge)
    * [config.defaults(options)](#module_webpack-config.Config#defaults)
    * [config.extend(options)](#module_webpack-config.Config#extend)
    * [config.toPlainObject()](#module_webpack-config.Config#toPlainObject)
  * [class: webpack-config.MultiConfig](#module_webpack-config.MultiConfig)
    * [new webpack-config.MultiConfig(options)](#new_module_webpack-config.MultiConfig)
    * [multiConfig.merge(options)](#module_webpack-config.MultiConfig#merge)
    * [multiConfig.defaults(options)](#module_webpack-config.MultiConfig#defaults)
    * [multiConfig.extend(options)](#module_webpack-config.MultiConfig#extend)
    * [multiConfig.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject)

<a name="module_webpack-config.Config"></a>
##webpack-config.Config
**Properties**

-  `Config`  

**Read only**: true  
<a name="module_webpack-config.MultiConfig"></a>
##webpack-config.MultiConfig
**Properties**

-  `MultiConfig`  

**Read only**: true  
<a name="module_webpack-config.useCache"></a>
##webpack-config.useCache
Use cache or not

**Properties**

-  `Boolean`  

<a name="module_webpack-config.fromObject"></a>
##webpack-config.fromObject(options)
Creates new config form object

**Params**

- options `Object` - Options  

**Returns**: `Config` | `MultiConfig`  
<a name="module_webpack-config.fromCwd"></a>
##webpack-config.fromCwd([basename])
Loads config from `process.cwd()`

**Params**

- \[basename=`webpack.config.js`\] `String` - Config file name  

**Returns**: `Config` | `MultiConfig`  
<a name="module_webpack-config.fromDirectory"></a>
##webpack-config.fromDirectory(dirname, [basename])
Loads config from directory

**Params**

- dirname `String` - Directory name  
- \[basename=`webpack.config.js`\] `String` - Config file name  

**Returns**: `Config` | `MultiConfig`  
<a name="module_webpack-config.fromFile"></a>
##webpack-config.fromFile(filename)
Loads config from file

**Params**

- filename `String` - File name  

**Returns**: `Config` | `MultiConfig`  
<a name="module_webpack-config.closest"></a>
##webpack-config.closest(dirname, [basename])
Finds closest config

**Params**

- dirname `String` - Directory name  
- \[basename=`webpack.config.js`\] `String` - Config file name  

**Returns**: `String` - File path  
<a name="module_webpack-config.CONFIG_FILENAME"></a>
##const: webpack-config.CONFIG_FILENAME
`webpack.config.js`

**Type**: `String`  
<a name="module_webpack-config.Config"></a>
##class: webpack-config.Config
Represents webpack config

**Members**

* [class: webpack-config.Config](#module_webpack-config.Config)
  * [new webpack-config.Config(options)](#new_module_webpack-config.Config)
  * [config.merge(options)](#module_webpack-config.Config#merge)
  * [config.defaults(options)](#module_webpack-config.Config#defaults)
  * [config.extend(options)](#module_webpack-config.Config#extend)
  * [config.toPlainObject()](#module_webpack-config.Config#toPlainObject)

<a name="new_module_webpack-config.Config"></a>
###new webpack-config.Config(options)
**Params**

- options `Object` - Please see [webpack.github.io](http://webpack.github.io/docs/configuration.html)  

<a name="module_webpack-config.Config#merge"></a>
###config.merge(options)
Merges options

**Params**

- options `Object` - Options  

**Returns**: `Config`  
<a name="module_webpack-config.Config#defaults"></a>
###config.defaults(options)
Merges default options

**Params**

- options `Object` - Options  

**Returns**: `Config`  
<a name="module_webpack-config.Config#extend"></a>
###config.extend(options)
Creates a new config and merges options

**Params**

- options `Object` - Options  

**Returns**: `Config`  
<a name="module_webpack-config.Config#toPlainObject"></a>
###config.toPlainObject()
Returns webpack config

**Returns**: `Object`  
<a name="module_webpack-config.MultiConfig"></a>
##class: webpack-config.MultiConfig
Represents multi webpack config

**Members**

* [class: webpack-config.MultiConfig](#module_webpack-config.MultiConfig)
  * [new webpack-config.MultiConfig(options)](#new_module_webpack-config.MultiConfig)
  * [multiConfig.merge(options)](#module_webpack-config.MultiConfig#merge)
  * [multiConfig.defaults(options)](#module_webpack-config.MultiConfig#defaults)
  * [multiConfig.extend(options)](#module_webpack-config.MultiConfig#extend)
  * [multiConfig.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject)

<a name="new_module_webpack-config.MultiConfig"></a>
###new webpack-config.MultiConfig(options)
**Params**

- options `Array` - Array  

<a name="module_webpack-config.MultiConfig#merge"></a>
###multiConfig.merge(options)
Merges options

**Params**

- options `Object` - Options  

**Returns**: `MultiConfig`  
<a name="module_webpack-config.MultiConfig#defaults"></a>
###multiConfig.defaults(options)
Merges default options

**Params**

- options `Object` - Options  

**Returns**: `MultiConfig`  
<a name="module_webpack-config.MultiConfig#extend"></a>
###multiConfig.extend(options)
Creates a new config and merges options

**Params**

- options `Object` - Options  

**Returns**: `MultiConfig`  
<a name="module_webpack-config.MultiConfig#toPlainObject"></a>
###multiConfig.toPlainObject()
Returns webpack configs

**Returns**: `Array`  

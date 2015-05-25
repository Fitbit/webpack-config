<a name="module_webpack-config"></a>
## webpack-config
**Example**  
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
**Example**  
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

* [webpack-config](#module_webpack-config)
  * [.Config](#module_webpack-config.Config)
    * [new Config([options])](#new_module_webpack-config.Config_new)
    * [.merge([options])](#module_webpack-config.Config#merge) ⇒ <code>Config</code>
    * [.defaults([options])](#module_webpack-config.Config#defaults) ⇒ <code>Config</code>
    * [.extend([options])](#module_webpack-config.Config#extend) ⇒ <code>Config</code>
    * [.toPlainObject()](#module_webpack-config.Config#toPlainObject) ⇒ <code>Object</code>
  * [.MultiConfig](#module_webpack-config.MultiConfig)
    * [new MultiConfig([options])](#new_module_webpack-config.MultiConfig_new)
    * [.merge([options])](#module_webpack-config.MultiConfig#merge) ⇒ <code>MultiConfig</code>
    * [.defaults([options])](#module_webpack-config.MultiConfig#defaults) ⇒ <code>MultiConfig</code>
    * [.extend([options])](#module_webpack-config.MultiConfig#extend) ⇒ <code>MultiConfig</code>
    * [.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject) ⇒ <code>Array</code>
  * [.Config](#module_webpack-config.Config)
    * [new Config([options])](#new_module_webpack-config.Config_new)
    * [.merge([options])](#module_webpack-config.Config#merge) ⇒ <code>Config</code>
    * [.defaults([options])](#module_webpack-config.Config#defaults) ⇒ <code>Config</code>
    * [.extend([options])](#module_webpack-config.Config#extend) ⇒ <code>Config</code>
    * [.toPlainObject()](#module_webpack-config.Config#toPlainObject) ⇒ <code>Object</code>
  * [.MultiConfig](#module_webpack-config.MultiConfig)
    * [new MultiConfig([options])](#new_module_webpack-config.MultiConfig_new)
    * [.merge([options])](#module_webpack-config.MultiConfig#merge) ⇒ <code>MultiConfig</code>
    * [.defaults([options])](#module_webpack-config.MultiConfig#defaults) ⇒ <code>MultiConfig</code>
    * [.extend([options])](#module_webpack-config.MultiConfig#extend) ⇒ <code>MultiConfig</code>
    * [.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject) ⇒ <code>Array</code>
  * [.useCache](#module_webpack-config.useCache)
  * [.CONFIG_FILENAME](#module_webpack-config.CONFIG_FILENAME) : <code>String</code>
  * [.fromObject(options)](#module_webpack-config.fromObject) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
  * [.fromCwd([basename])](#module_webpack-config.fromCwd) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
  * [.fromDirectory(dirname, [basename])](#module_webpack-config.fromDirectory) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
  * [.fromFile(filename)](#module_webpack-config.fromFile) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
  * [.closest(dirname, [basename])](#module_webpack-config.closest) ⇒ <code>String</code>

<a name="module_webpack-config.Config"></a>
### webpack-config.Config
Represents webpack config

**Kind**: static class of <code>[webpack-config](#module_webpack-config)</code>  

* [.Config](#module_webpack-config.Config)
  * [new Config([options])](#new_module_webpack-config.Config_new)
  * [.merge([options])](#module_webpack-config.Config#merge) ⇒ <code>Config</code>
  * [.defaults([options])](#module_webpack-config.Config#defaults) ⇒ <code>Config</code>
  * [.extend([options])](#module_webpack-config.Config#extend) ⇒ <code>Config</code>
  * [.toPlainObject()](#module_webpack-config.Config#toPlainObject) ⇒ <code>Object</code>

<a name="new_module_webpack-config.Config_new"></a>
#### new Config([options])

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Please see more info about [options](http://webpack.github.io/docs/configuration.html). |

<a name="module_webpack-config.Config#merge"></a>
#### config.merge([options]) ⇒ <code>Config</code>
Merges options

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.Config#defaults"></a>
#### config.defaults([options]) ⇒ <code>Config</code>
Merges default options.

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.Config#extend"></a>
#### config.extend([options]) ⇒ <code>Config</code>
Creates a new config and merges options.

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.Config#toPlainObject"></a>
#### config.toPlainObject() ⇒ <code>Object</code>
Returns webpack config.

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  
<a name="module_webpack-config.MultiConfig"></a>
### webpack-config.MultiConfig
Represents multi webpack config.

**Kind**: static class of <code>[webpack-config](#module_webpack-config)</code>  

* [.MultiConfig](#module_webpack-config.MultiConfig)
  * [new MultiConfig([options])](#new_module_webpack-config.MultiConfig_new)
  * [.merge([options])](#module_webpack-config.MultiConfig#merge) ⇒ <code>MultiConfig</code>
  * [.defaults([options])](#module_webpack-config.MultiConfig#defaults) ⇒ <code>MultiConfig</code>
  * [.extend([options])](#module_webpack-config.MultiConfig#extend) ⇒ <code>MultiConfig</code>
  * [.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject) ⇒ <code>Array</code>

<a name="new_module_webpack-config.MultiConfig_new"></a>
#### new MultiConfig([options])

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> | 

<a name="module_webpack-config.MultiConfig#merge"></a>
#### multiConfig.merge([options]) ⇒ <code>MultiConfig</code>
Merges options

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.MultiConfig#defaults"></a>
#### multiConfig.defaults([options]) ⇒ <code>MultiConfig</code>
Merges default options.

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.MultiConfig#extend"></a>
#### multiConfig.extend([options]) ⇒ <code>MultiConfig</code>
Creates a new config and merges options.

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.MultiConfig#toPlainObject"></a>
#### multiConfig.toPlainObject() ⇒ <code>Array</code>
Returns webpack configs.

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  
<a name="module_webpack-config.Config"></a>
### webpack-config.Config
**Kind**: static property of <code>[webpack-config](#module_webpack-config)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>Config</code> | 


* [.Config](#module_webpack-config.Config)
  * [new Config([options])](#new_module_webpack-config.Config_new)
  * [.merge([options])](#module_webpack-config.Config#merge) ⇒ <code>Config</code>
  * [.defaults([options])](#module_webpack-config.Config#defaults) ⇒ <code>Config</code>
  * [.extend([options])](#module_webpack-config.Config#extend) ⇒ <code>Config</code>
  * [.toPlainObject()](#module_webpack-config.Config#toPlainObject) ⇒ <code>Object</code>

<a name="new_module_webpack-config.Config_new"></a>
#### new Config([options])

| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>Object</code> | Please see more info about [options](http://webpack.github.io/docs/configuration.html). |

<a name="module_webpack-config.Config#merge"></a>
#### config.merge([options]) ⇒ <code>Config</code>
Merges options

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.Config#defaults"></a>
#### config.defaults([options]) ⇒ <code>Config</code>
Merges default options.

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.Config#extend"></a>
#### config.extend([options]) ⇒ <code>Config</code>
Creates a new config and merges options.

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.Config#toPlainObject"></a>
#### config.toPlainObject() ⇒ <code>Object</code>
Returns webpack config.

**Kind**: instance method of <code>[Config](#module_webpack-config.Config)</code>  
<a name="module_webpack-config.MultiConfig"></a>
### webpack-config.MultiConfig
**Kind**: static property of <code>[webpack-config](#module_webpack-config)</code>  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>MultiConfig</code> | 


* [.MultiConfig](#module_webpack-config.MultiConfig)
  * [new MultiConfig([options])](#new_module_webpack-config.MultiConfig_new)
  * [.merge([options])](#module_webpack-config.MultiConfig#merge) ⇒ <code>MultiConfig</code>
  * [.defaults([options])](#module_webpack-config.MultiConfig#defaults) ⇒ <code>MultiConfig</code>
  * [.extend([options])](#module_webpack-config.MultiConfig#extend) ⇒ <code>MultiConfig</code>
  * [.toPlainObject()](#module_webpack-config.MultiConfig#toPlainObject) ⇒ <code>Array</code>

<a name="new_module_webpack-config.MultiConfig_new"></a>
#### new MultiConfig([options])

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> | 

<a name="module_webpack-config.MultiConfig#merge"></a>
#### multiConfig.merge([options]) ⇒ <code>MultiConfig</code>
Merges options

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.MultiConfig#defaults"></a>
#### multiConfig.defaults([options]) ⇒ <code>MultiConfig</code>
Merges default options.

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.MultiConfig#extend"></a>
#### multiConfig.extend([options]) ⇒ <code>MultiConfig</code>
Creates a new config and merges options.

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="module_webpack-config.MultiConfig#toPlainObject"></a>
#### multiConfig.toPlainObject() ⇒ <code>Array</code>
Returns webpack configs.

**Kind**: instance method of <code>[MultiConfig](#module_webpack-config.MultiConfig)</code>  
<a name="module_webpack-config.useCache"></a>
### webpack-config.useCache
Use cache or not

**Kind**: static property of <code>[webpack-config](#module_webpack-config)</code>  
**Properties**

| Type |
| --- |
| <code>Boolean</code> | 

<a name="module_webpack-config.CONFIG_FILENAME"></a>
### webpack-config.CONFIG_FILENAME : <code>String</code>
`webpack.config.js`

**Kind**: static constant of <code>[webpack-config](#module_webpack-config)</code>  
<a name="module_webpack-config.fromObject"></a>
### webpack-config.fromObject(options) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
Creates new config form object

**Kind**: static method of <code>[webpack-config](#module_webpack-config)</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Options |

<a name="module_webpack-config.fromCwd"></a>
### webpack-config.fromCwd([basename]) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
Loads config from `process.cwd()`

**Kind**: static method of <code>[webpack-config](#module_webpack-config)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [basename] | <code>String</code> | <code>webpack.config.js</code> | Config file name |

<a name="module_webpack-config.fromDirectory"></a>
### webpack-config.fromDirectory(dirname, [basename]) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
Loads config from directory

**Kind**: static method of <code>[webpack-config](#module_webpack-config)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dirname | <code>String</code> |  | Directory name |
| [basename] | <code>String</code> | <code>webpack.config.js</code> | Config file name |

<a name="module_webpack-config.fromFile"></a>
### webpack-config.fromFile(filename) ⇒ <code>Config</code> &#124; <code>MultiConfig</code>
Loads config from file

**Kind**: static method of <code>[webpack-config](#module_webpack-config)</code>  

| Param | Type | Description |
| --- | --- | --- |
| filename | <code>String</code> | File name |

<a name="module_webpack-config.closest"></a>
### webpack-config.closest(dirname, [basename]) ⇒ <code>String</code>
Finds closest config

**Kind**: static method of <code>[webpack-config](#module_webpack-config)</code>  
**Returns**: <code>String</code> - File path  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| dirname | <code>String</code> |  | Directory name |
| [basename] | <code>String</code> | <code>webpack.config.js</code> | Config file name |


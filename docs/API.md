<a name="Config"></a>
#class: Config
Represents webpack config

**Members**

* [class: Config](#Config)
  * [new Config(attributes)](#new_Config)
  * [Config.useCache](#Config.useCache)
  * [config.merge(attributes)](#Config#merge)
  * [config.extend(attributes)](#Config#extend)
  * [Config.fromObject(attributes)](#Config.fromObject)
  * [Config.fromCwd([basename])](#Config.fromCwd)
  * [Config.fromDirectory(dirname, [basename])](#Config.fromDirectory)
  * [Config.fromFile(filename)](#Config.fromFile)
  * [Config.closest(dirname, [basename])](#Config.closest)

<a name="new_Config"></a>
##new Config(attributes)
**Params**

- attributes `Object` - Attributes (please see [webpack.github.io](http://webpack.github.io/docs/configuration.html))  

<a name="Config.useCache"></a>
##Config.useCache
**Properties**

-  `Boolean` - Use cache or not  

<a name="Config#merge"></a>
##config.merge(attributes)
Merges attributes

**Params**

- attributes `Object` - Attributes  

**Returns**: [Config](#Config)  
<a name="Config#extend"></a>
##config.extend(attributes)
Creates a new config and merges attributes

**Params**

- attributes `Object` - Attributes  

**Returns**: [Config](#Config)  
<a name="Config.fromObject"></a>
##Config.fromObject(attributes)
Creates new config form object

**Params**

- attributes `Object` - Attributes  

**Returns**: [Config](#Config)  
<a name="Config.fromCwd"></a>
##Config.fromCwd([basename])
Loads config from `process.cwd()`

**Params**

- \[basename=`webpack.config.js`\] `String` - Config file name  

**Returns**: [Config](#Config)  
<a name="Config.fromDirectory"></a>
##Config.fromDirectory(dirname, [basename])
Loads config from directory

**Params**

- dirname `String` - Directory name  
- \[basename=`webpack.config.js`\] `String` - Config file name  

**Returns**: [Config](#Config)  
<a name="Config.fromFile"></a>
##Config.fromFile(filename)
Loads config from file

**Params**

- filename `String` - File name  

**Returns**: [Config](#Config)  
<a name="Config.closest"></a>
##Config.closest(dirname, [basename])
Finds closest config

**Params**

- dirname `String` - Directory name  
- \[basename=`webpack.config.js`\] `String` - Config file name  

**Returns**: `String` - File path  

<a name="Config"></a>
#class: Config
Represents webpack config

**Members**

* [class: Config](#Config)
  * [new Config(attributes)](#new_Config)
  * [config.merge(attributes)](#Config#merge)
  * [config.extend(attributes)](#Config#extend)
  * [Config.from(attributes)](#Config.from)
  * [Config.load(filename)](#Config.load)
  * [Config.closest(dirname)](#Config.closest)

<a name="new_Config"></a>
##new Config(attributes)
**Params**

- attributes `Object` - Attributes (please see [webpack.github.io](http://webpack.github.io/docs/configuration.html))  

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
<a name="Config.from"></a>
##Config.from(attributes)
Creates new config form attributes

**Params**

- attributes `Object` - Attributes  

**Returns**: [Config](#Config)  
<a name="Config.load"></a>
##Config.load(filename)
Loads config from directory or file

**Params**

- filename `String` - [filename=`process.cwd()`]  - Directory or file  

**Returns**: [Config](#Config)  
<a name="Config.closest"></a>
##Config.closest(dirname)
Finds closest config

**Params**

- dirname `String` - Directory  

**Returns**: `String` - File name  

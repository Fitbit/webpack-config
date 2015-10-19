## Modules
<dl>
<dt><a href="#module_webpack-config">webpack-config</a> ⇒ <code><a href="#Config">Config</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/config">webpack-config/lib/config</a> ⇒ <code><a href="#Config">Config</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configCloneMixin">webpack-config/lib/configCloneMixin</a> ⇒ <code><a href="#ConfigCloneMixin">ConfigCloneMixin</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configDefaultsMixin">webpack-config/lib/configDefaultsMixin</a> ⇒ <code><a href="#ConfigDefaultsMixin">ConfigDefaultsMixin</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configEnvironment">webpack-config/lib/configEnvironment</a> ⇒ <code><a href="#ConfigEnvironment">ConfigEnvironment</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configExtendMixin">webpack-config/lib/configExtendMixin</a> ⇒ <code><a href="#ConfigExtendMixin">ConfigExtendMixin</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configFactory">webpack-config/lib/configFactory</a> ⇒ <code><a href="#ConfigFactory">ConfigFactory</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configFinder">webpack-config/lib/configFinder</a> ⇒ <code><a href="#ConfigFinder">ConfigFinder</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configLoader">webpack-config/lib/configLoader</a> ⇒ <code><a href="#ConfigLoader">ConfigLoader</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configMergeMixin">webpack-config/lib/configMergeMixin</a> ⇒ <code><a href="#ConfigMergeMixin">ConfigMergeMixin</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configNameResolver">webpack-config/lib/configNameResolver</a> ⇒ <code><a href="#ConfigNameResolver">ConfigNameResolver</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configPathResolver">webpack-config/lib/configPathResolver</a> ⇒ <code><a href="#ConfigPathResolver">ConfigPathResolver</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configToObjectMixin">webpack-config/lib/configToObjectMixin</a> ⇒ <code><a href="#ConfigToObjectMixin">ConfigToObjectMixin</a></code></dt>
<dd></dd>
<dt><a href="#module_webpack-config/lib/configVisitor">webpack-config/lib/configVisitor</a> ⇒ <code><a href="#ConfigVisitor">ConfigVisitor</a></code></dt>
<dd></dd>
</dl>
## Classes
<dl>
<dt><a href="#Config">Config</a></dt>
<dd></dd>
<dt><a href="#ConfigEnvironment">ConfigEnvironment</a></dt>
<dd></dd>
<dt><a href="#ConfigFactory">ConfigFactory</a></dt>
<dd></dd>
<dt><a href="#ConfigFinder">ConfigFinder</a></dt>
<dd></dd>
<dt><a href="#ConfigLoader">ConfigLoader</a></dt>
<dd></dd>
<dt><a href="#ConfigNameResolver">ConfigNameResolver</a></dt>
<dd></dd>
<dt><a href="#ConfigPathResolver">ConfigPathResolver</a></dt>
<dd></dd>
<dt><a href="#ConfigVisitor">ConfigVisitor</a></dt>
<dd></dd>
</dl>
## Members
<dl>
<dt><a href="#ConfigCloneMixin">ConfigCloneMixin</a></dt>
<dd></dd>
<dt><a href="#ConfigDefaultsMixin">ConfigDefaultsMixin</a></dt>
<dd></dd>
<dt><a href="#ConfigExtendMixin">ConfigExtendMixin</a></dt>
<dd></dd>
<dt><a href="#ConfigMergeMixin">ConfigMergeMixin</a></dt>
<dd></dd>
<dt><a href="#ConfigToObjectMixin">ConfigToObjectMixin</a></dt>
<dd></dd>
</dl>
<a name="module_webpack-config"></a>
## webpack-config ⇒ <code>[Config](#Config)</code>
<a name="module_webpack-config/lib/config"></a>
## webpack-config/lib/config ⇒ <code>[Config](#Config)</code>
<a name="module_webpack-config/lib/configCloneMixin"></a>
## webpack-config/lib/configCloneMixin ⇒ <code>[ConfigCloneMixin](#ConfigCloneMixin)</code>
<a name="module_webpack-config/lib/configDefaultsMixin"></a>
## webpack-config/lib/configDefaultsMixin ⇒ <code>[ConfigDefaultsMixin](#ConfigDefaultsMixin)</code>
<a name="module_webpack-config/lib/configEnvironment"></a>
## webpack-config/lib/configEnvironment ⇒ <code>[ConfigEnvironment](#ConfigEnvironment)</code>
<a name="module_webpack-config/lib/configExtendMixin"></a>
## webpack-config/lib/configExtendMixin ⇒ <code>[ConfigExtendMixin](#ConfigExtendMixin)</code>
<a name="module_webpack-config/lib/configFactory"></a>
## webpack-config/lib/configFactory ⇒ <code>[ConfigFactory](#ConfigFactory)</code>
<a name="module_webpack-config/lib/configFinder"></a>
## webpack-config/lib/configFinder ⇒ <code>[ConfigFinder](#ConfigFinder)</code>
<a name="module_webpack-config/lib/configLoader"></a>
## webpack-config/lib/configLoader ⇒ <code>[ConfigLoader](#ConfigLoader)</code>
<a name="module_webpack-config/lib/configMergeMixin"></a>
## webpack-config/lib/configMergeMixin ⇒ <code>[ConfigMergeMixin](#ConfigMergeMixin)</code>
<a name="module_webpack-config/lib/configNameResolver"></a>
## webpack-config/lib/configNameResolver ⇒ <code>[ConfigNameResolver](#ConfigNameResolver)</code>
<a name="module_webpack-config/lib/configPathResolver"></a>
## webpack-config/lib/configPathResolver ⇒ <code>[ConfigPathResolver](#ConfigPathResolver)</code>
<a name="module_webpack-config/lib/configToObjectMixin"></a>
## webpack-config/lib/configToObjectMixin ⇒ <code>[ConfigToObjectMixin](#ConfigToObjectMixin)</code>
<a name="module_webpack-config/lib/configVisitor"></a>
## webpack-config/lib/configVisitor ⇒ <code>[ConfigVisitor](#ConfigVisitor)</code>
<a name="Config"></a>
## Config
**Kind**: global class  

* [Config](#Config)
  * [.environment](#Config.environment)
  * [.nameResolver](#Config.nameResolver)
  * [.factory](#Config.factory)
  * [.loader](#Config.loader)
  * [.finder](#Config.finder)
  * [.visitor](#Config.visitor)
  * [.pathResolver](#Config.pathResolver)
  * [.FILENAME](#Config.FILENAME) : <code>String</code>

<a name="Config.environment"></a>
### Config.environment
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigEnvironment](#ConfigEnvironment)</code> | 

<a name="Config.nameResolver"></a>
### Config.nameResolver
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigNameResolver](#ConfigNameResolver)</code> | 

<a name="Config.factory"></a>
### Config.factory
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigFinder](#ConfigFinder)</code> | 

<a name="Config.loader"></a>
### Config.loader
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigLoader](#ConfigLoader)</code> | 

<a name="Config.finder"></a>
### Config.finder
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigFinder](#ConfigFinder)</code> | 

<a name="Config.visitor"></a>
### Config.visitor
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigVisitor](#ConfigVisitor)</code> | 

<a name="Config.pathResolver"></a>
### Config.pathResolver
**Kind**: static property of <code>[Config](#Config)</code>  
**Properties**

| Type |
| --- |
| <code>[ConfigPathResolver](#ConfigPathResolver)</code> | 

<a name="Config.FILENAME"></a>
### Config.FILENAME : <code>String</code>
`webpack.config.js`

**Kind**: static constant of <code>[Config](#Config)</code>  
<a name="ConfigEnvironment"></a>
## ConfigEnvironment
**Kind**: global class  

* [ConfigEnvironment](#ConfigEnvironment)
  * [new ConfigEnvironment(...arguments)](#new_ConfigEnvironment_new)
  * [.add(...arguments)](#ConfigEnvironment+add)
  * [.keys()](#ConfigEnvironment+keys) ⇒ <code>Object</code>
  * [.value(key)](#ConfigEnvironment+value) ⇒ <code>\*</code>

<a name="new_ConfigEnvironment_new"></a>
### new ConfigEnvironment(...arguments)

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> | 

<a name="ConfigEnvironment+add"></a>
### configEnvironment.add(...arguments)
Adds custom `variables`

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> | 

<a name="ConfigEnvironment+keys"></a>
### configEnvironment.keys() ⇒ <code>Object</code>
Gets keys

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  
<a name="ConfigEnvironment+value"></a>
### configEnvironment.value(key) ⇒ <code>\*</code>
Gets value

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="ConfigFactory"></a>
## ConfigFactory
**Kind**: global class  
<a name="ConfigFactory+create"></a>
### configFactory.create(obj) ⇒ <code>[Config](#Config)</code> &#124; <code>[Array.&lt;Config&gt;](#Config)</code>
Creates config instance

**Kind**: instance method of <code>[ConfigFactory](#ConfigFactory)</code>  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> &#124; <code>Array.&lt;Object&gt;</code> &#124; <code>function</code> | 

<a name="ConfigFinder"></a>
## ConfigFinder
**Kind**: global class  

* [ConfigFinder](#ConfigFinder)
  * [new ConfigFinder(loader, pathResolver)](#new_ConfigFinder_new)
  * [.closest(filename)](#ConfigFinder+closest) ⇒ <code>[Config](#Config)</code> &#124; <code>[Array.&lt;Config&gt;](#Config)</code>

<a name="new_ConfigFinder_new"></a>
### new ConfigFinder(loader, pathResolver)

| Param | Type |
| --- | --- |
| loader | <code>[ConfigLoader](#ConfigLoader)</code> | 
| pathResolver | <code>[ConfigPathResolver](#ConfigPathResolver)</code> | 

<a name="ConfigFinder+closest"></a>
### configFinder.closest(filename) ⇒ <code>[Config](#Config)</code> &#124; <code>[Array.&lt;Config&gt;](#Config)</code>
Finds closest config

**Kind**: instance method of <code>[ConfigFinder](#ConfigFinder)</code>  

| Param | Type |
| --- | --- |
| filename | <code>String</code> | 

<a name="ConfigLoader"></a>
## ConfigLoader
**Kind**: global class  

* [ConfigLoader](#ConfigLoader)
  * [new ConfigLoader(factory, pathResolver, [useCache])](#new_ConfigLoader_new)
  * [.load(filename)](#ConfigLoader+load) ⇒ <code>[Config](#Config)</code> &#124; <code>[Array.&lt;Config&gt;](#Config)</code>

<a name="new_ConfigLoader_new"></a>
### new ConfigLoader(factory, pathResolver, [useCache])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| factory | <code>[ConfigFactory](#ConfigFactory)</code> |  |  |
| pathResolver | <code>[ConfigPathResolver](#ConfigPathResolver)</code> |  |  |
| [useCache] | <code>Boolean</code> | <code>true</code> | Use cache or not |

<a name="ConfigLoader+load"></a>
### configLoader.load(filename) ⇒ <code>[Config](#Config)</code> &#124; <code>[Array.&lt;Config&gt;](#Config)</code>
Loads config from file

**Kind**: instance method of <code>[ConfigLoader](#ConfigLoader)</code>  

| Param | Type |
| --- | --- |
| filename | <code>String</code> | 

<a name="ConfigNameResolver"></a>
## ConfigNameResolver
**Kind**: global class  

* [ConfigNameResolver](#ConfigNameResolver)
  * [new ConfigNameResolver(environment)](#new_ConfigNameResolver_new)
  * [.resolve(filename)](#ConfigNameResolver+resolve) ⇒ <code>String</code>

<a name="new_ConfigNameResolver_new"></a>
### new ConfigNameResolver(environment)

| Param | Type |
| --- | --- |
| environment | <code>[ConfigEnvironment](#ConfigEnvironment)</code> | 

<a name="ConfigNameResolver+resolve"></a>
### configNameResolver.resolve(filename) ⇒ <code>String</code>
Resolves `filename`

**Kind**: instance method of <code>[ConfigNameResolver](#ConfigNameResolver)</code>  

| Param | Type |
| --- | --- |
| filename | <code>String</code> | 

<a name="ConfigPathResolver"></a>
## ConfigPathResolver
**Kind**: global class  

* [ConfigPathResolver](#ConfigPathResolver)
  * [new ConfigPathResolver(nameResolver)](#new_ConfigPathResolver_new)
  * [.resolve(filename)](#ConfigPathResolver+resolve) ⇒ <code>String</code>

<a name="new_ConfigPathResolver_new"></a>
### new ConfigPathResolver(nameResolver)

| Param | Type |
| --- | --- |
| nameResolver | <code>[ConfigNameResolver](#ConfigNameResolver)</code> | 

<a name="ConfigPathResolver+resolve"></a>
### configPathResolver.resolve(filename) ⇒ <code>String</code>
Resolves path

**Kind**: instance method of <code>[ConfigPathResolver](#ConfigPathResolver)</code>  

| Param | Type |
| --- | --- |
| filename | <code>String</code> | 

<a name="ConfigVisitor"></a>
## ConfigVisitor
**Kind**: global class  

* [ConfigVisitor](#ConfigVisitor)
  * [new ConfigVisitor(loader, pathResolver, [extendField], [excludeFields])](#new_ConfigVisitor_new)
  * [.visit(obj)](#ConfigVisitor+visit) ⇒ <code>Object.&lt;String, Config&gt;</code>

<a name="new_ConfigVisitor_new"></a>
### new ConfigVisitor(loader, pathResolver, [extendField], [excludeFields])

| Param | Type | Default |
| --- | --- | --- |
| loader | <code>[ConfigLoader](#ConfigLoader)</code> |  | 
| pathResolver | <code>[ConfigPathResolver](#ConfigPathResolver)</code> |  | 
| [extendField] | <code>String</code> | <code>&#x27;extend&#x27;</code> | 
| [excludeFields] | <code>Array.&lt;String&gt;</code> | <code>[&#x27;extend&#x27;,&#x27;filename&#x27;]</code> | 

<a name="ConfigVisitor+visit"></a>
### configVisitor.visit(obj) ⇒ <code>Object.&lt;String, Config&gt;</code>
Returns `visited` configs

**Kind**: instance method of <code>[ConfigVisitor](#ConfigVisitor)</code>  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 

<a name="ConfigCloneMixin"></a>
## ConfigCloneMixin
**Kind**: global variable  
<a name="ConfigCloneMixin.clone"></a>
### ConfigCloneMixin.clone() ⇒ <code>[Config](#Config)</code>
Creates a new config

**Kind**: static method of <code>[ConfigCloneMixin](#ConfigCloneMixin)</code>  
<a name="ConfigDefaultsMixin"></a>
## ConfigDefaultsMixin
**Kind**: global variable  
<a name="ConfigDefaultsMixin.defaults"></a>
### ConfigDefaultsMixin.defaults([options]) ⇒ <code>[Config](#Config)</code>
Merges default options

**Kind**: static method of <code>[ConfigDefaultsMixin](#ConfigDefaultsMixin)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="ConfigExtendMixin"></a>
## ConfigExtendMixin
**Kind**: global variable  
<a name="ConfigExtendMixin.extend"></a>
### ConfigExtendMixin.extend(options) ⇒ <code>[Config](#Config)</code>
Extends config using external ones

**Kind**: static method of <code>[ConfigExtendMixin](#ConfigExtendMixin)</code>  

| Param | Type |
| --- | --- |
| options | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> &#124; <code>Object.&lt;String, function()&gt;</code> &#124; <code>Object.&lt;String, Boolean&gt;</code> | 

<a name="ConfigMergeMixin"></a>
## ConfigMergeMixin
**Kind**: global variable  
<a name="ConfigMergeMixin.merge"></a>
### ConfigMergeMixin.merge([options]) ⇒ <code>[Config](#Config)</code>
Merges options

**Kind**: static method of <code>[ConfigMergeMixin](#ConfigMergeMixin)</code>  

| Param | Type |
| --- | --- |
| [options] | <code>Object</code> | 

<a name="ConfigToObjectMixin"></a>
## ConfigToObjectMixin
**Kind**: global variable  
<a name="ConfigToObjectMixin.toObject"></a>
### ConfigToObjectMixin.toObject() ⇒ <code>Object</code>
Returns plain object

**Kind**: static method of <code>[ConfigToObjectMixin](#ConfigToObjectMixin)</code>  

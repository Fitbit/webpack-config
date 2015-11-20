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
## Mixins
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
**Mixes**: <code>[ConfigDefaultsMixin](#ConfigDefaultsMixin)</code>, <code>[ConfigMergeMixin](#ConfigMergeMixin)</code>, <code>[ConfigCloneMixin](#ConfigCloneMixin)</code>, <code>[ConfigExtendMixin](#ConfigExtendMixin)</code>, <code>[ConfigToObjectMixin](#ConfigToObjectMixin)</code>  

* [Config](#Config)
  * _instance_
    * [.defaults(...arguments)](#Config+defaults) ⇒ <code>[Config](#Config)</code>
    * [.merge(...arguments)](#Config+merge) ⇒ <code>[Config](#Config)</code>
    * [.clone()](#Config+clone) ⇒ <code>[Config](#Config)</code>
    * [.extend(...arguments)](#Config+extend) ⇒ <code>[Config](#Config)</code>
    * [.toObject()](#Config+toObject) ⇒ <code>Object</code>
  * _static_
    * [.environment](#Config.environment)
    * [.nameResolver](#Config.nameResolver)
    * [.factory](#Config.factory)
    * [.loader](#Config.loader)
    * [.finder](#Config.finder)
    * [.visitor](#Config.visitor)
    * [.pathResolver](#Config.pathResolver)
    * [.FILENAME](#Config.FILENAME) : <code>String</code>

<a name="Config+defaults"></a>
### config.defaults(...arguments) ⇒ <code>[Config](#Config)</code>
Merges default options

**Kind**: instance method of <code>[Config](#Config)</code>  
**Mixes**: <code>[defaults](#ConfigDefaultsMixin.defaults)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> &#124; <code>function</code> | 

<a name="Config+merge"></a>
### config.merge(...arguments) ⇒ <code>[Config](#Config)</code>
Merges options

**Kind**: instance method of <code>[Config](#Config)</code>  
**Mixes**: <code>[merge](#ConfigMergeMixin.merge)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> &#124; <code>function</code> | 

<a name="Config+clone"></a>
### config.clone() ⇒ <code>[Config](#Config)</code>
Creates a new config

**Kind**: instance method of <code>[Config](#Config)</code>  
**Mixes**: <code>[clone](#ConfigCloneMixin.clone)</code>  
<a name="Config+extend"></a>
### config.extend(...arguments) ⇒ <code>[Config](#Config)</code>
Extends config

**Kind**: instance method of <code>[Config](#Config)</code>  
**Mixes**: <code>[extend](#ConfigExtendMixin.extend)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>ExtendOptions</code> | 

<a name="Config+toObject"></a>
### config.toObject() ⇒ <code>Object</code>
Returns plain object

**Kind**: instance method of <code>[Config](#Config)</code>  
**Mixes**: <code>[toObject](#ConfigToObjectMixin.toObject)</code>  
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
  * [.set(...arguments)](#ConfigEnvironment+set)
  * [.keys()](#ConfigEnvironment+keys) ⇒ <code>Array.&lt;String&gt;</code>
  * [.get(key)](#ConfigEnvironment+get) ⇒ <code>\*</code>
  * [.reset()](#ConfigEnvironment+reset)

<a name="new_ConfigEnvironment_new"></a>
### new ConfigEnvironment(...arguments)
Adds `process.env` to `variables` by default


| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> | 

<a name="ConfigEnvironment+set"></a>
### configEnvironment.set(...arguments)
Adds custom `variables`

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> | 

<a name="ConfigEnvironment+keys"></a>
### configEnvironment.keys() ⇒ <code>Array.&lt;String&gt;</code>
Gets keys

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  
<a name="ConfigEnvironment+get"></a>
### configEnvironment.get(key) ⇒ <code>\*</code>
Gets value from `variables` or `process.env` as fallback

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

<a name="ConfigEnvironment+reset"></a>
### configEnvironment.reset()
Resets `variables` to default state

**Kind**: instance method of <code>[ConfigEnvironment](#ConfigEnvironment)</code>  
<a name="ConfigFactory"></a>
## ConfigFactory
**Kind**: global class  
<a name="ConfigFactory+create"></a>
### configFactory.create(obj) ⇒ <code>[Config](#Config)</code> &#124; <code>[Array.&lt;Config&gt;](#Config)</code>
Creates config

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
Loads config

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
  * [new ConfigVisitor(loader, pathResolver, [excludeFields])](#new_ConfigVisitor_new)
  * [.visit(options, [context])](#ConfigVisitor+visit) ⇒ <code>Object.&lt;String, Config&gt;</code>

<a name="new_ConfigVisitor_new"></a>
### new ConfigVisitor(loader, pathResolver, [excludeFields])

| Param | Type | Default |
| --- | --- | --- |
| loader | <code>[ConfigLoader](#ConfigLoader)</code> |  | 
| pathResolver | <code>[ConfigPathResolver](#ConfigPathResolver)</code> |  | 
| [excludeFields] | <code>Array.&lt;String&gt;</code> | <code>[&#x27;filename&#x27;]</code> | 

<a name="ConfigVisitor+visit"></a>
### configVisitor.visit(options, [context]) ⇒ <code>Object.&lt;String, Config&gt;</code>
Returns `visited` configs

**Kind**: instance method of <code>[ConfigVisitor](#ConfigVisitor)</code>  

| Param | Type |
| --- | --- |
| options | <code>Array.&lt;ExtendOptions&gt;</code> | 
| [context] | <code>\*</code> | 

<a name="ConfigCloneMixin"></a>
## ConfigCloneMixin
**Kind**: global mixin  
<a name="ConfigCloneMixin.clone"></a>
### ConfigCloneMixin.clone() ⇒ <code>[Config](#Config)</code>
Creates a new config

**Kind**: static method of <code>[ConfigCloneMixin](#ConfigCloneMixin)</code>  
<a name="ConfigDefaultsMixin"></a>
## ConfigDefaultsMixin
**Kind**: global mixin  
<a name="ConfigDefaultsMixin.defaults"></a>
### ConfigDefaultsMixin.defaults(...arguments) ⇒ <code>[Config](#Config)</code>
Merges default options

**Kind**: static method of <code>[ConfigDefaultsMixin](#ConfigDefaultsMixin)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> &#124; <code>function</code> | 

<a name="ConfigExtendMixin"></a>
## ConfigExtendMixin
**Kind**: global mixin  
<a name="ConfigExtendMixin.extend"></a>
### ConfigExtendMixin.extend(...arguments) ⇒ <code>[Config](#Config)</code>
Extends config

**Kind**: static method of <code>[ConfigExtendMixin](#ConfigExtendMixin)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>ExtendOptions</code> | 

<a name="ConfigMergeMixin"></a>
## ConfigMergeMixin
**Kind**: global mixin  
<a name="ConfigMergeMixin.merge"></a>
### ConfigMergeMixin.merge(...arguments) ⇒ <code>[Config](#Config)</code>
Merges options

**Kind**: static method of <code>[ConfigMergeMixin](#ConfigMergeMixin)</code>  

| Param | Type |
| --- | --- |
| ...arguments | <code>Object</code> &#124; <code>function</code> | 

<a name="ConfigToObjectMixin"></a>
## ConfigToObjectMixin
**Kind**: global mixin  
<a name="ConfigToObjectMixin.toObject"></a>
### ConfigToObjectMixin.toObject() ⇒ <code>Object</code>
Returns plain object

**Kind**: static method of <code>[ConfigToObjectMixin](#ConfigToObjectMixin)</code>  

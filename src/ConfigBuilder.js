import {
    isFunction
} from 'lodash';
import Config from './Config';
import ConfigFactory from './ConfigFactory';

/**
 * @private
 * @type {WeakMap}
 */
const CONFIG = new WeakMap();

/**
 * @private
 * @type {WeakMap}
 */
const PENDING_CONFIG = new WeakMap();

/**
 * @private
 * @param {String} path
 * @param {*|Function} hook
 * @param {Config} current
 * @param {Config} previous
 * @returns {*}
 */
const evalHook = (path, hook, current, previous) => isFunction(hook) ? hook(path, current, previous) : hook;

/**
 * @private
 * @param {WeakMap} map
 * @param {*} context
 * @returns {Config}
 */
const getOrSetConfig = (map, context) => {
    if (!map.has(context)) {
        map.set(context, new Config());
    }

    return map.get(context);
};

/**
 * @class
 */
class ConfigBuilder {
    /**
     * @private
     * @readonly
     * @type {Config|ConfigList}
     */
    get config() {
        return getOrSetConfig(CONFIG, this);
    }

    /**
     * @readonly
     * @type {Config}
     */
    get pendingConfig() {
        return getOrSetConfig(PENDING_CONFIG, this);
    }

    /**
     * @param {Function|Object|Object[]} value
     * @returns {ConfigBuilder}
     */
    copyOf(value) {
        CONFIG.set(this, ConfigFactory.createConfig(value));

        return this;
    }

    /**
     * @see {@link Config#merge}
     * @param {...ConfigMergeOptions} values
     * @returns {ConfigBuilder}
     */
    merge(...values) {
        this.pendingConfig.merge(...values);

        return this;
    }

    /**
     * @see {@link Config#defaults}
     * @param {...ConfigDefaultsOptions} values
     * @returns {ConfigBuilder}
     */
    defaults(...values) {
        this.pendingConfig.defaults(...values);

        return this;
    }

    /**
     * @see {@link Config#extend}
     * @param {...ConfigExtendOptions} values
     * @returns {ConfigBuilder}
     */
    extend(...values) {
        this.pendingConfig.extend(...values);

        return this;
    }

    /**
     * @param {Object<String,Function>} [hooks]
     * @returns {ConfigBuilder}
     */
    applyHooks(hooks = {}) {
        for (const [path, hook] of Object.entries(hooks)) {
            if (Array.isArray(this.config)) {
                this.config.forEach(config => {
                    if (config.has(path)) {
                        const value = evalHook(path, hook, this.pendingConfig, config);

                        this.pendingConfig.set(path, value);
                    }
                });
            } else {
                if (this.pendingConfig.has(path)) {
                    const value = evalHook(path, hook, this.pendingConfig, this.config);

                    this.pendingConfig.set(path, value);
                }
            }
        }

        return this;
    }

    /**
     * @returns {Config|ConfigList}
     */
    build() {
        let value;

        if (Array.isArray(this.config)) {
            value = this.config.map(x => x.clone().merge(this.pendingConfig).toObject());
        } else {
            value = this.config.clone().merge(this.pendingConfig).toObject();
        }

        const config = ConfigFactory.createConfig(value);

        PENDING_CONFIG.delete(this);
        CONFIG.set(this, config);

        return config;
    }
}

export default ConfigBuilder;

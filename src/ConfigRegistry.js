/**
 * @private
 * @type {WeakMap}
 */
const INSTANCE = new WeakMap();

/**
 * @class
 * @extends {Map}
 */
class ConfigRegistry extends Map {
    /**
     * @param {*} key
     * @param {Function} valueLoader
     * @returns {*}
     */
    getOrSet(key, valueLoader) {
        if (!this.has(key)) {
            this.set(key, valueLoader());
        }

        return this.get(key);
    }

    /**
     * @readonly
     * @type {ConfigRegistry}
     */
    static get INSTANCE() {
        if (!INSTANCE.has(this)) {
            INSTANCE.set(this, new ConfigRegistry());
        }

        return INSTANCE.get(this);
    }
}

export default ConfigRegistry;

import {
    isFunction,
    isString,
    isObject
} from 'lodash';

/**
 * @private
 * @type {String[]}
 */
const EXCLUDE_FIELDS = [
    'filename',
    'DEPENDENCY_TREE'
];

/**
 * @private
 * @param {Config} config
 * @returns {Config}
 */
const DEFAULT_TRANSFORM = config => config;

/**
 * @private
 * @param {Config} config
 * @returns {config}
 */
const CLEANUP_TRANSFORM = config => {
    EXCLUDE_FIELDS.forEach(function(name) {
        delete config[name];
    });

    return config;
};

/**
 * @class
 * @extends {Map}
 * @private
 */
class ConfigExtendTransform extends Map {
    /**
     * @override
     * @param {*} key
     * @param {Function} [value]
     * @throws {ReferenceError}
     * @returns {Function[]}
     */
    set(key, value = ConfigExtendTransform.DEFAULT) {
        if (!isFunction(value)) {
            throw new ReferenceError(`\`${value}\` is not \`Function\``);
        }

        const values = this.has(key) ? this.get(key) : [];

        if (this.has(key)) {
            values.pop();
        }

        values.push(value, ConfigExtendTransform.CLEANUP);

        return super.set(key, values);
    }

    /**
     * @param {...ConfigExtendOptions} values
     * @returns {ConfigExtendTransform}
     */
    setAll(...values) {
        values.forEach(obj => {
            if (isString(obj)) {
                this.set(obj);
            } else if (isObject(obj)) {
                for (const [key, value] of Object.entries(obj)) {
                    if (Array.isArray(value)) {
                        value.filter(isFunction).forEach(x => this.set(key, x));
                    } else if (isFunction(value)) {
                        this.set(key, value);
                    }
                }
            }
        });

        return this;
    }

    /**
     * @readonly
     * @type {Function}
     */
    static get DEFAULT() {
        return DEFAULT_TRANSFORM;
    }

    /**
     * @readonly
     * @type {Function}
     */
    static get CLEANUP() {
        return CLEANUP_TRANSFORM;
    }

    /**
     * @param {...ConfigExtendOptions} values
     * @returns {ConfigExtendTransform}
     */
    static initWith(...values) {
        return new ConfigExtendTransform().setAll(...values);
    }
}

export default ConfigExtendTransform;

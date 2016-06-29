import {
    isError
} from 'lodash';
import {
    resolve
} from 'path';
import ConfigNameResolver from './ConfigNameResolver';
import ConfigRegistry from './ConfigRegistry';

/**
 * @private
 * @type {WeakMap}
 */
const NAME_RESOLVER = new WeakMap();

/**
 * @private
 * @type {String}
 */
const MODULE_PREFIX = 'webpack-config';

/* eslint-disable valid-jsdoc */
/**
 * @private
 * @type {Function[]}
 */
const DEFAULT_RESOLVERS = [
    /**
     * `require('<module-name>')`
     * @param {String} filename
     * @returns {String|Error}
     */
    filename => {
        try {
            return require.resolve(filename);
        } catch (err) {
            return err;
        }
    },

    /**
     * `require('webpack-config-<name>')`
     * @param {String} filename
     * @returns {String|Error}
     */
    filename => {
        try {
            return require.resolve(`${MODULE_PREFIX}-${filename}`);
        } catch (err) {
            return err;
        }
    },

    /**
     * `path.resolve('<file-name>')`
     * @param {String} filename
     * @returns {String}
     */
    filename => resolve(filename)
];
/* eslint-enable valid-jsdoc */

/**
 * @private
 * @type {WeakMap}
 */
const RESOLVERS = new WeakMap();

/**
 * @class
 */
class ConfigPathResolver {
    /**
     * @constructor
     * @param {ConfigNameResolver} nameResolver
     * @param {Function[]} [resolvers]
     */
    constructor(nameResolver, resolvers = DEFAULT_RESOLVERS) {
        NAME_RESOLVER.set(this, nameResolver);
        RESOLVERS.set(this, resolvers);
    }

    /**
     * @readonly
     * @type {ConfigNameResolver}
     */
    get nameResolver() {
        return NAME_RESOLVER.get(this);
    }

    /**
     * @readonly
     * @type {Function[]}
     */
    get resolvers() {
        return RESOLVERS.get(this);
    }

    /**
     * @param {String} filename
     * @returns {String}
     */
    resolvePath(filename) {
        filename = this.nameResolver.resolveName(filename);

        for (const resolver of this.resolvers) {
            const value = resolver(filename);

            if (!isError(value)) {
                filename = value;
                break;
            }
        }

        return filename;
    }

    /**
     * @readonly
     * @type {ConfigPathResolver}
     */
    static get INSTANCE() {
        return ConfigRegistry.INSTANCE.getOrSet(this, () => new ConfigPathResolver(ConfigNameResolver.INSTANCE));
    }
}

export default ConfigPathResolver;

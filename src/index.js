import Config from './Config';
import ConfigCache from './ConfigCache';
import ConfigLoader from './ConfigLoader';
import ConfigFinder from './ConfigFinder';
import ConfigEnvironment from './ConfigEnvironment';
import ConfigPatternCache from './ConfigPatternCache';

/**
 * @module webpack-config
 */

/**
 * @type {Config}
 */
export default Config;

/**
 * @type {Object}
 */
export {
    /**
     * @type {Config}
     */
    Config,
    /**
     * @type {ConfigPatternCache}
     */
    ConfigPatternCache,
    /**
     * @type {ConfigCache}
     */
    ConfigCache,
    /**
     * @type {ConfigLoader}
     */
    ConfigLoader,
    /**
     * @type {ConfigFinder}
     */
    ConfigFinder,
    /**
     * @type {ConfigEnvironment}
     */
    ConfigEnvironment
};

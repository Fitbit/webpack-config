import {
    resolve
} from 'path';
import ConfigLoader from '../src/ConfigLoader';
import ConfigEnvironment from '../src/ConfigEnvironment';
import ConfigNameResolver from '../src/ConfigNameResolver';
import ConfigPathResolver from '../src/ConfigPathResolver';
import ConfigCache from '../src/ConfigCache';

describe('ConfigLoader', () => {
    let environment,
        nameResolver,
        pathResolver,
        cache,
        loader;

    beforeEach(() => {
        environment = new ConfigEnvironment();
        nameResolver = new ConfigNameResolver(environment);
        pathResolver = new ConfigPathResolver(nameResolver);
        cache = new ConfigCache(environment);
        loader = new ConfigLoader(pathResolver, cache);
    });

    describe('.INSTANCE', () => {
        it('should return instance of `ConfigLoader`', () => {
            expect(ConfigLoader.INSTANCE).toEqual(jasmine.any(ConfigLoader));
        });
    });

    describe('#loadConfig()', () => {
        it('should load config', () => {
            let config = loader.loadConfig('./test/fixtures/webpack.1.config.js');

            expect(config).toEqual(jasmine.any(Object));
        });

        it('should set `filename` when absent', () => {
            let config = loader.loadConfig('./test/fixtures/webpack.6.config.js');

            expect(config.filename).toEqual(resolve('./test/fixtures/webpack.6.config.js'));
        });

        it('should throw exception when config is not found', () => {
            expect(() => {
                loader.loadConfig('./test/fixtures/webpack.not-found.config.js');
            }).toThrowError(Error);
        });
    });
});

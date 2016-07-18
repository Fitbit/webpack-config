import {
    resolve
} from 'path';
import ConfigEnvironment from '../src/ConfigEnvironment';
import ConfigNameResolver from '../src/ConfigNameResolver';
import ConfigPathResolver from '../src/ConfigPathResolver';

describe('ConfigPathResolver', () => {
    let environment,
        nameResolver,
        pathResolver;

    beforeEach(() => {
        environment = new ConfigEnvironment();
        nameResolver = new ConfigNameResolver(environment);
        pathResolver = new ConfigPathResolver(nameResolver);
    });

    describe('.INSTANCE', () => {
        it('should return instance of `ConfigPathResolver`', () => {
            expect(ConfigPathResolver.INSTANCE).toEqual(jasmine.any(ConfigPathResolver));
        });
    });

    describe('#resolve()', () => {
        it('should resolve as `path.resolve()`', () => {
            let filename = pathResolver.resolve('webpack.config.js');

            expect(filename).toEqual(resolve('webpack.config.js'));
        });

        it('should resolve as `require.resolve()`', () => {
            let filename = pathResolver.resolve('lodash');

            expect(filename).toEqual(require.resolve('lodash'));
        });
    });
});

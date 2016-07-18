import {
    resolve
} from 'path';
import ConfigEnvironment from '../src/ConfigEnvironment';
import ConfigNameResolver from '../src/ConfigNameResolver';
import ConfigPathResolver from '../src/ConfigPathResolver';
import ConfigFinder from '../src/ConfigFinder';

describe('ConfigFinder', () => {
    let environment,
        nameResolver,
        pathResolver,
        finder;

    beforeEach(() => {
        environment = new ConfigEnvironment();
        nameResolver = new ConfigNameResolver(environment);
        pathResolver = new ConfigPathResolver(nameResolver);
        finder = new ConfigFinder(pathResolver);
    });

    describe('.INSTANCE', () => {
        it('should return instance of `ConfigFinder`', () => {
            expect(ConfigFinder.INSTANCE).toEqual(jasmine.any(ConfigFinder));
        });
    });

    describe('#findConfigs()', () => {
        it('should find configs using pattern `./test/fixtures/webpack.*.config.js`', () => {
            let configs = finder.findConfigs('./test/fixtures/webpack.*.config.js');

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(6);
        });

        it('should find configs using pattern `./test/fixtures/webpack.1.config.js`', () => {
            let configs = finder.findConfigs('./test/fixtures/webpack.1.config.js');

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(1);
        });

        it('should return `[]` when configs are not found', () => {
            let configs = finder.findConfigs('./webpack.config.js');

            expect(configs).toEqual([]);
        });
    });

    describe('#findClosestConfigs()', () => {
        it('should find closet configs using pattern `./test/fixtures/dir1/dir2/dir3/webpack.*.config.js`', () => {
            let configs = finder.findClosestConfigs('./test/fixtures/dir1/dir2/dir3/webpack.*.config.js');

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(6);
        });

        it('should find closet configs using pattern `./test/fixtures/webpack.1.config.js`', () => {
            let configs = finder.findClosestConfigs('./test/fixtures/webpack.1.config.js');

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(1);
            expect(configs[0]).toEqual(resolve('./test/fixtures/webpack.1.config.js'));
        });

        it('should return `[]` when closet configs are not found', () => {
            let configs = finder.findClosestConfigs('./webpack.config.js');

            expect(configs).toEqual([]);
        });
    });
});

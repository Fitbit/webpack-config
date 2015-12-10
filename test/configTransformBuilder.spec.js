'use strict';

var _ = require('lodash'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    DefaultConfigLoader = require('../lib/defaultConfigLoader'),
    InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver'),
    ConfigTransformBuilder = require('../lib/configTransformBuilder');

describe('ConfigTransformBuilder', function () {
    var configEnvironment = new InMemoryConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new DefaultConfigPathResolver(configNameResolver),
        configFactory = new DefaultConfigFactory(),
        configLoader = new DefaultConfigLoader(configFactory, configPathResolver),
        configTransformBuilder,
        cleanupTransform,
        defaultTransform;

    beforeEach(function() {
        configTransformBuilder = new ConfigTransformBuilder(configLoader);
        cleanupTransform = configTransformBuilder.createCleanupTransform();
        defaultTransform = configTransformBuilder.createDefaultTransform();
    });

    describe('#setAll()', function() {
        function configTransform() {}

        it('should accept `String`', function() {
            configTransformBuilder.setAll('./test/fixtures/webpack.1.config.js');

            var expected = {};

            expected[configPathResolver.resolvePath('./test/fixtures/webpack.1.config.js')] = [
                defaultTransform,
                cleanupTransform
            ];

            expect(configTransformBuilder.build()).toEqual(expected);
        });

        it('should accept `String[]`', function() {
            configTransformBuilder.setAll(
                './test/fixtures/webpack.1.config.js',
                './test/fixtures/webpack.2.config.js'
            ).setAll([
                './test/fixtures/webpack.1.config.js',
                './test/fixtures/webpack.2.config.js',
                './test/fixtures/webpack.3.config.js',
                './test/fixtures/webpack.4.config.js'
            ]);

            var transforms = [
                defaultTransform,
                cleanupTransform
            ];

            var expected = {};

            expected[configPathResolver.resolvePath('./test/fixtures/webpack.1.config.js')] = transforms;
            expected[configPathResolver.resolvePath('./test/fixtures/webpack.2.config.js')] = transforms;
            expected[configPathResolver.resolvePath('./test/fixtures/webpack.3.config.js')] = transforms;
            expected[configPathResolver.resolvePath('./test/fixtures/webpack.4.config.js')] = transforms;

            expect(configTransformBuilder.build()).toEqual(expected);
        });

        it('should accept `Object<String,Boolean>`', function() {
            configTransformBuilder.setAll({
                './test/fixtures/webpack.1.config.js': true,
                './test/fixtures/webpack.2.config.js': false,
                './test/fixtures/webpack.3.config.js': true,
                './test/fixtures/webpack.4.config.js': false
            });

            var transforms = [
                defaultTransform,
                cleanupTransform
            ];

            var expected = {};

            expected[configPathResolver.resolvePath('./test/fixtures/webpack.1.config.js')] = transforms;
            expected[configPathResolver.resolvePath('./test/fixtures/webpack.3.config.js')] = transforms;

            expect(configTransformBuilder.build()).toEqual(expected);
        });

        it('should accept `Object<String,Function>`', function() {
            configTransformBuilder.setAll({
                './test/fixtures/webpack.1.config.js': _.noop,
                './test/fixtures/webpack.2.config.js': configTransform
            });

            var expected = {};

            expected[configPathResolver.resolvePath('./test/fixtures/webpack.1.config.js')] = [
                _.noop,
                cleanupTransform
            ];
            expected[configPathResolver.resolvePath('./test/fixtures/webpack.2.config.js')] = [
                configTransform,
                cleanupTransform
            ];

            expect(configTransformBuilder.build()).toEqual(expected);
        });

        it('should accept `Object<String,Function[]>`', function() {
            configTransformBuilder.setAll({
                './test/fixtures/webpack.1.config.js': [
                    _.noop,
                    configTransform
                ]
            });

            var expected = {};

            expected[configPathResolver.resolvePath('./test/fixtures/webpack.1.config.js')] = [
                _.noop,
                configTransform,
                cleanupTransform
            ];

            expect(configTransformBuilder.build()).toEqual(expected);
        });
    });
});

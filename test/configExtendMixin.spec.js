'use strict';

var webpack = require('webpack'),
    Config = require('../lib/config'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    DefaultConfigLoader = require('../lib/defaultConfigLoader'),
    InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver');

describe('ConfigExtendMixin', function () {
    var configEnvironment = new InMemoryConfigEnvironment(),
        configFactory = new DefaultConfigFactory(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment),
        configPathResolver = new DefaultConfigPathResolver(configNameResolver),
        configLoader = new DefaultConfigLoader(configFactory, configPathResolver);

    Config.pathResolver = configPathResolver;
    Config.loader = configLoader;

    describe('#extend()', function() {
        it('should extend via `String`', function() {
            var config = new Config();

            config.extend('./test/fixtures/webpack.5.config.js');

            expect(config.toObject()).toEqual({
                debug: false,
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                }
            });
        });

        it('should extend via `String[]`', function() {
            var config = new Config();

            config.extend([
                './test/fixtures/webpack.5.config.js'
            ]);

            expect(config.toObject()).toEqual({
                debug: false,
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                }
            });
        });

        it('should extend via `Object<String,Function>`', function() {
            var config = new Config();

            function configTransform(x) {
                return x;
            }

            config.extend({
                './test/fixtures/webpack.5.config.js': configTransform
            });

            expect(config.toObject()).toEqual({
                debug: false,
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                }
            });
        });

        it('should extend via `Object<String,Function[]>`', function() {
            var config = new Config();

            function configTransform1(x) {
                x.foo = 'foo';

                return x;
            }

            function configTransform2(x) {
                x.bar = 'bar';

                return x;
            }

            config.extend({
                './test/fixtures/webpack.5.config.js': [configTransform1, configTransform2]
            });

            expect(config.toObject()).toEqual({
                foo: 'foo',
                bar: 'bar',
                debug: false,
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                }
            });
        });

        it('should extend via `Object<String,Boolean>`', function() {
            var config = new Config();

            config.extend({
                './test/fixtures/webpack.5.config.js': true,
                './test/fixtures/webpack.6.config.js': false
            });

            expect(config.toObject()).toEqual({
                debug: false,
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                }
            });
        });

        it('should pass `Config` and `this` context to transform `Function`', function() {
            var config = new Config();

            function configTransform(x) {
                expect(x).toEqual(jasmine.any(Config));
                expect(this).toBe(config);

                return x;
            }

            config.extend({
                './test/fixtures/webpack.6.config.js': configTransform
            });

            expect(config.toObject()).toEqual({
                plugins: [
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ]
            });
        });

        it('should accept plain `Object` which was returned from transform `Function`', function() {
            var config = new Config();

            function configTransform() {
                return {
                    debug: false
                };
            }

            config.extend({
                './test/fixtures/webpack.6.config.js': configTransform
            });

            expect(config.toObject()).toEqual({
                debug: false
            });
        });

        it('should return empty `Object` when transform `Function` does not return nothing', function() {
            var config = new Config();

            function configTransform() {}

            config.extend({
                './test/fixtures/webpack.6.config.js': configTransform
            });

            expect(config.toObject()).toEqual({});
        });
    });
});

'use strict';

var expect = require('expect.js'),
    webpack = require('webpack'),
    Config = require('../lib/config'),
    ConfigFactory = require('../lib/configFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    ConfigVisitor = require('../lib/configVisitor'),
    ConfigNameResolver = require('../lib/configNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

describe('ConfigExtendMixin', function () {
    var configEnvironment = new ConfigEnvironment(),
        configFactory = new ConfigFactory(),
        configNameResolver = new ConfigNameResolver(configEnvironment),
        configPathResolver = new ConfigPathResolver(configNameResolver),
        configLoader = new ConfigLoader(configFactory, configPathResolver),
        configVisitor = new ConfigVisitor(configLoader, configPathResolver);

    Config.visitor = configVisitor;

    context('#extend()', function() {
        it('should accept "String"', function() {
            var config = new Config();

            config.extend('./test/fixtures/webpack.5.config.js');

            expect(config.toObject()).to.eql({
                debug: false,
                extend: './test/fixtures/webpack.5.config.js',
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                },
                visited: [
                    './test/fixtures/webpack.3.config.js',
                    './test/fixtures/webpack.4.config.js'
                ]
            });
        });

        it('should accept "String[]"', function() {
            var config = new Config();

            config.extend([
                './test/fixtures/webpack.5.config.js'
            ]);

            expect(config.toObject()).to.eql({
                debug: false,
                extend: [
                    './test/fixtures/webpack.5.config.js'
                ],
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                },
                visited: [
                    './test/fixtures/webpack.3.config.js',
                    './test/fixtures/webpack.4.config.js'
                ]
            });
        });

        it('should accept "Object<String,Function>"', function() {
            var config = new Config();

            function configTransform(x) {
                return x;
            }

            config.extend({
                './test/fixtures/webpack.5.config.js': configTransform
            });

            expect(config.toObject()).to.eql({
                debug: false,
                extend: {
                    './test/fixtures/webpack.5.config.js': configTransform
                },
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                },
                visited: [
                    './test/fixtures/webpack.3.config.js',
                    './test/fixtures/webpack.4.config.js'
                ]
            });
        });

        it('should accept "Object<String,Boolean>"', function() {
            var config = new Config();

            config.extend({
                './test/fixtures/webpack.5.config.js': true
            });

            expect(config.toObject()).to.eql({
                debug: false,
                extend: {
                    './test/fixtures/webpack.5.config.js': true
                },
                plugins: [
                    new webpack.optimize.UglifyJsPlugin(),
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ],
                resolve: {
                    alias: {
                        config: './test/fixtures/webpack.5.config.js'
                    }
                },
                visited: [
                    './test/fixtures/webpack.3.config.js',
                    './test/fixtures/webpack.4.config.js'
                ]
            });
        });

        it('should pass "Config" to transform "Function"', function() {
            var config = new Config();

            function configTransform(x) {
                expect(x).to.be.an(Config);

                return x;
            }

            config.extend({
                './test/fixtures/webpack.6.config.js': configTransform
            });

            expect(config.toObject()).to.eql({
                extend: {
                    './test/fixtures/webpack.6.config.js': configTransform
                },
                plugins: [
                    new webpack.optimize.OccurrenceOrderPlugin(true)
                ]
            });
        });

        it('should accept plain "Object" which was returned from transform "Function"', function() {
            var config = new Config();

            function configTransform() {
                return {
                    debug: false
                };
            }

            config.extend({
                './test/fixtures/webpack.6.config.js': configTransform
            });

            expect(config.toObject()).to.eql({
                extend: {
                    './test/fixtures/webpack.6.config.js': configTransform
                },
                debug: false
            });
        });

        it('should return empty "Object" when transform "Function" does not return nothing', function() {
            var config = new Config();

            function configTransform() {}

            config.extend({
                './test/fixtures/webpack.6.config.js': configTransform
            });

            expect(config.toObject()).to.eql({
                extend: {
                    './test/fixtures/webpack.6.config.js': configTransform
                }
            });
        });
    });
});

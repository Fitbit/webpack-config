'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config'),
    ConfigFactory = require('../lib/configFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    ConfigVisitor = require('../lib/configVisitor'),
    ConfigNameResolver = require('../lib/configNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

describe('ConfigVisitor', function () {
    var configEnvironment = new ConfigEnvironment(),
        configFactory = new ConfigFactory(),
        configNameResolver = new ConfigNameResolver(configEnvironment),
        configPathResolver = new ConfigPathResolver(configNameResolver),
        configLoader = new ConfigLoader(configFactory, configPathResolver),
        configVisitor = new ConfigVisitor(configLoader, configPathResolver);

    context('#visit()', function() {
        it('should visit "{extend:String}"', function() {
            var visited = configVisitor.visit({
                extend: './test/fixtures/webpack.4.config.js'
            });

            expect(visited).to.only.have.keys([
                configPathResolver.resolve('./test/fixtures/webpack.3.config.js'),
                configPathResolver.resolve('./test/fixtures/webpack.4.config.js')
            ]);
        });

        it('should visit "{extend:String[]}"', function() {
            var visited = configVisitor.visit({
                extend: [
                    './test/fixtures/webpack.4.config.js',
                    './test/fixtures/webpack.5.config.js'
                ]
            });

            expect(visited).to.only.have.keys([
                configPathResolver.resolve('./test/fixtures/webpack.3.config.js'),
                configPathResolver.resolve('./test/fixtures/webpack.4.config.js'),
                configPathResolver.resolve('./test/fixtures/webpack.5.config.js')
            ]);
        });

        it('should visit "{extend:Object<String,Function>}"', function() {
            var visited = configVisitor.visit({
                extend: {
                    './test/fixtures/webpack.4.config.js': function(config) {
                        return config;
                    },
                    './test/fixtures/webpack.5.config.js': function(config) {
                        return config;
                    }
                }
            });

            expect(visited).to.only.have.keys([
                configPathResolver.resolve('./test/fixtures/webpack.3.config.js'),
                configPathResolver.resolve('./test/fixtures/webpack.4.config.js'),
                configPathResolver.resolve('./test/fixtures/webpack.5.config.js')
            ]);
        });

        it('should visit "{extend:Object<String,Boolean>}"', function() {
            var visited = configVisitor.visit({
                extend: {
                    './test/fixtures/webpack.4.config.js': true,
                    './test/fixtures/webpack.5.config.js': false
                }
            });

            expect(visited).to.only.have.keys([
                configPathResolver.resolve('./test/fixtures/webpack.3.config.js'),
                configPathResolver.resolve('./test/fixtures/webpack.4.config.js')
            ]);
        });

        it('should throw exception if "options" are not defined', function() {
            expect(configVisitor.visit).withArgs().to.throwError();
        });

        it('should not visit the same configs', function() {
            var visited = configVisitor.visit({
                extend: [
                    './test/fixtures/webpack.6.config.js',
                    './test/fixtures/webpack.6.config.js',
                    './test/fixtures/webpack.6.config.js'
                ]
            });

            expect(visited).to.only.have.keys([
                configPathResolver.resolve('./test/fixtures/webpack.6.config.js')
            ]);
        });

        it('should pass "Config" to transform "Function"', function() {
            configVisitor.visit({
                extend: {
                    './test/fixtures/webpack.6.config.js': function(x) {
                        expect(x).to.be.an(Config);

                        return x;
                    }
                }
            });
        });

        it('should accept plain "Object" which was returned from transform "Function"', function() {
            var visited = configVisitor.visit({
                extend: {
                    './test/fixtures/webpack.6.config.js': function() {
                        return {
                            debug: false
                        };
                    }
                }
            });

            expect(visited[configPathResolver.resolve('./test/fixtures/webpack.6.config.js')]).to.eql({
                debug: false
            });
        });

        it('should return empty "Object" when transform "Function" does not return nothing', function() {
            var visited = configVisitor.visit({
                extend: {
                    './test/fixtures/webpack.6.config.js': function() {}
                }
            });

            expect(visited[configPathResolver.resolve('./test/fixtures/webpack.6.config.js')]).to.eql({});
        });
    });
});

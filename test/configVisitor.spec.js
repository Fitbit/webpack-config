'use strict';

var expect = require('expect.js'),
    ConfigFactory = require('../lib/configFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigVisitor = require('../lib/configVisitor'),
    ConfigNameResolver = require('../lib/configNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

describe('ConfigVisitor', function () {
    var configFactory = new ConfigFactory(),
        configNameResolver = new ConfigNameResolver(),
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
    });
});

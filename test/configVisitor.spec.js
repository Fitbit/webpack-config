'use strict';

var expect = require('expect.js'),
    ConfigVisitor = require('../lib/configVisitor'),
    ConfigPathResolver = require('../lib/configPathResolver');

var configVisitor = ConfigVisitor.INSTANCE,
    configPathResolver = ConfigPathResolver.INSTANCE;

describe('ConfigVisitor', function () {
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

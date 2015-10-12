'use strict';

var expect = require('expect.js'),
    webpack = require('webpack'),
    ConfigFactory = require('../lib/configFactory');

var configFactory = ConfigFactory.INSTANCE;

describe('ConfigExtendMixin', function () {
    context('#extend()', function() {
        it('should accept "String"', function() {
            var config = configFactory.create({});

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
            var config = configFactory.create({});

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
            var config = configFactory.create({});

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
            var config = configFactory.create({});

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
    });
});

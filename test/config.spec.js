'use strict';

var expect = require('expect.js'),
    webpackConfig = require('../index');

var util = require('../lib/util'),
    _ = require('lodash');

var Config = webpackConfig.Config;

describe('Config', function () {
    describe('merge', function() {
        it('success', function() {
            var o1 = {
                    foo: {
                        bar: 'bar1'
                    }
                },
                o2 = {
                    foo: {
                        bar: 'bar2'
                    }
                },
                r = _.merge(o1, o2, function(x, y) {
                    if (_.isArray(x)) {
                        return x.concat(y);
                    }
                });

            expect(r).to.eql({
                foo: {
                    bar: 'bar2'
                }
            });
        });
    });

    describe('#ctor()', function() {
        it('should accept object', function() {
            var config = new Config({
                foo: 'foo1'
            });

            expect(config.foo).to.be('foo1');
        });
    });

    describe('#merge()', function() {
        it('should do merging correctly', function() {
            var config = new Config({
                foo: 'foo1'
            });

            config.merge({
                foo: 'foo2'
            });

            expect(config.foo).to.be('foo2');
        });

        it('should do deep merging correctly', function() {
            var config = new Config({
                foo: {
                    bar: 'bar1'
                }
            });

            config.merge({
                foo: {
                    bar: 'bar2'
                }
            });

            expect(config.foo.bar).to.be('bar2');
        });
    });

    describe('#defaults()', function() {
        it('should assign default values correctly', function() {
            var config = new Config({
                foo: 'foo1'
            });

            config.defaults({
                foo: 'foo2'
            });

            expect(config.foo).to.be('foo1');
        });
    });

    describe('#extend()', function() {
        it('should create a new instance', function() {
            var expectedConfig = new Config(),
                actualConfig = expectedConfig.extend();

            expect(expectedConfig).not.to.be(actualConfig);
            expect(actualConfig).to.be.a(Config);
        });
    });

    describe('#toPlainObject()', function() {
        it('should return object', function() {
            var config = new Config({
                    foo: 'foo1'
                }),
                expectedObject = config.toPlainObject(),
                actualObject = {
                    foo: 'foo1'
                };

            expect(expectedObject).to.eql(actualObject);
        });
    });
});

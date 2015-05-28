'use strict';

var expect = require('expect.js'),
    webpackConfig = require('../index');

var MultiConfig = webpackConfig.MultiConfig;

describe('MultiConfig', function () {
    describe('#ctor()', function() {
        it('should accept one object', function() {
            var config = new MultiConfig({
                foo: 'foo1'
            });

            var array = config.toPlainObject();

            expect(array).to.have.length(1);
            expect(array).to.eql([{
                foo: 'foo1'
            }]);
        });

        it('should accept array of objects via arguments', function() {
            var config = new MultiConfig({
                foo: 'foo1'
            }, {
                foo: 'foo2'
            });

            var array = config.toPlainObject();

            expect(array).to.have.length(2);
            expect(array).to.eql([{
                foo: 'foo1'
            }, {
                foo: 'foo2'
            }]);
        });

        it('should accept array of objects', function() {
            var config = new MultiConfig([{
                foo: 'foo1'
            }]);

            var array = config.toPlainObject();

            expect(array).to.have.length(1);
            expect(array).to.eql([{
                foo: 'foo1'
            }]);
        });
    });

    describe('#merge()', function() {
        it('should do merging correctly', function() {
            var config = new MultiConfig({
                foo: 'foo1'
            });

            config.merge({
                foo: 'foo2'
            });

            var array = config.toPlainObject();

            expect(array).to.have.length(1);
            expect(array).to.eql([{
                foo: 'foo2'
            }]);
        });

        it('should do deep merging correctly', function() {
            var config = new MultiConfig({
                foo: {
                    bar: 'bar1'
                }
            });

            config.merge({
                foo: {
                    bar: 'bar2'
                }
            });

            var array = config.toPlainObject();

            expect(array).to.have.length(1);
            expect(array).to.eql([{
                foo: {
                    bar: 'bar2'
                }
            }]);
        });
    });

    describe('#defaults()', function() {
        it('should assign default values correctly', function() {
            var config = new MultiConfig({
                foo: 'foo1'
            });

            config.defaults({
                foo: 'foo2'
            });

            var array = config.toPlainObject();

            expect(array).to.have.length(1);
            expect(array).to.eql([{
                foo: 'foo1'
            }]);
        });
    });

    describe('#extend()', function() {
        it('should create a new instance', function() {
            var expectedConfig = new MultiConfig({
                    foo: 'foo1'
                }),
                actualConfig = expectedConfig.extend();

            expect(expectedConfig).to.have.length(1);
            expect(expectedConfig).not.to.be(actualConfig);
            expect(actualConfig).to.be.a(MultiConfig);
        });
    });

    describe('#toPlainObject()', function() {
        it('should return array', function() {
            var config = new MultiConfig({
                    foo: 'foo1'
                }),
                array = config.toPlainObject();

            expect(array).to.have.length(1);
            expect(array).to.be.an('array');
        });
    });
});

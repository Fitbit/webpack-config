'use strict';

var Config = require('../lib/config'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory');

describe('DefaultConfigFactory', function () {
    var configFactory = new DefaultConfigFactory();

    describe('#create()', function() {
        it('should create `Config` from `Object`', function() {
            var config = configFactory.createConfig({
                foo: 'foo1'
            });

            expect(config).toEqual(jasmine.any(Object));
            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Object[]`', function() {
            var configs = configFactory.createConfig([{
                foo: 'foo1'
            }]);

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(1);
            expect(configs[0]).toEqual(jasmine.any(Object));
            expect(configs[0]).toEqual(jasmine.any(Config));
            expect(configs[0].toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config` from `Object` via `Function`', function() {
            var config = configFactory.createConfig(function() {
                return {
                    foo: 'foo1'
                };
            });

            expect(config).toEqual(jasmine.any(Object));
            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Object[]` via `Function`', function() {
            var configs = configFactory.createConfig(function() {
                return [{
                    foo: 'foo1'
                }];
            });

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(1);
            expect(configs[0]).toEqual(jasmine.any(Object));
            expect(configs[0]).toEqual(jasmine.any(Config));
            expect(configs[0].toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config` from `Config`', function() {
            var config = configFactory.createConfig(new Config().merge({
                foo: 'foo1'
            }));

            expect(config).toEqual(jasmine.any(Object));
            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Config[]`', function() {
            var configs = configFactory.createConfig([new Config().merge({
                foo: 'foo1'
            })]);

            expect(configs).toEqual(jasmine.any(Array));
            expect(configs.length).toEqual(1);
            expect(configs[0]).toEqual(jasmine.any(Config));
            expect(configs[0].toObject()).toEqual({
                foo: 'foo1'
            });
        });
    });
});

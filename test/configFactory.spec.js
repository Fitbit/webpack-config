'use strict';

var Config = require('../lib/config'),
    ConfigFactory = require('../lib/configFactory');

describe('ConfigFactory', function () {
    var configFactory = new ConfigFactory();

    describe('#create()', function() {
        it('should create `Config` from `Object`', function() {
            var config = configFactory.create({
                foo: 'foo1'
            });

            expect(config).toEqual(jasmine.any(Object));
            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Object[]`', function() {
            var configs = configFactory.create([{
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
            var config = configFactory.create(function() {
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
            var configs = configFactory.create(function() {
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
            var config = configFactory.create(new Config().merge({
                foo: 'foo1'
            }));

            expect(config).toEqual(jasmine.any(Object));
            expect(config).toEqual(jasmine.any(Config));
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Config[]`', function() {
            var configs = configFactory.create([new Config().merge({
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

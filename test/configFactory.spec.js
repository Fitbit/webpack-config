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

            expect(typeof config === 'object').toBeTruthy();
            expect(config instanceof Config).toBeTruthy();
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Object[]`', function() {
            var configs = configFactory.create([{
                foo: 'foo1'
            }]);

            expect(Array.isArray(configs)).toBeTruthy();
            expect(configs.length).toEqual(1);
            expect(configs[0] instanceof Config).toBeTruthy();
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

            expect(typeof config === 'object').toBeTruthy();
            expect(config instanceof Config).toBeTruthy();
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

            expect(Array.isArray(configs)).toBeTruthy();
            expect(configs.length).toEqual(1);
            expect(configs[0] instanceof Config).toBeTruthy();
            expect(configs[0].toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config` from `Config`', function() {
            var config = configFactory.create(new Config().merge({
                foo: 'foo1'
            }));

            expect(typeof config === 'object').toBeTruthy();
            expect(config instanceof Config).toBeTruthy();
            expect(config.toObject()).toEqual({
                foo: 'foo1'
            });
        });

        it('should create `Config[]` from `Config[]`', function() {
            var configs = configFactory.create([new Config().merge({
                foo: 'foo1'
            })]);

            expect(Array.isArray(configs)).toBeTruthy();
            expect(configs.length).toEqual(1);
            expect(configs[0] instanceof Config).toBeTruthy();
            expect(configs[0].toObject()).toEqual({
                foo: 'foo1'
            });
        });
    });
});

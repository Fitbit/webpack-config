'use strict';

var Config = require('../lib/config');

describe('Config', function () {
    describe('#ctor()', function() {
        it('should create config', function() {
            var config = new Config();

            expect(config).toEqual(jasmine.any(Config));

            ['extend', 'merge', 'defaults', 'toObject', 'clone'].forEach(function(name) {
                expect(config[name]).toEqual(jasmine.any(Function));
            });
        });
    });
});

'use strict';

var Config = require('../lib/config');

describe('Config', function () {
    describe('#ctor()', function() {
        it('should create config', function() {
            var config = new Config();

            expect(config instanceof Config).toBeTruthy();

            ['extend', 'merge', 'defaults', 'toObject', 'clone'].forEach(function(name) {
                expect(typeof config[name] === 'function').toBeTruthy();
            });
        });
    });
});

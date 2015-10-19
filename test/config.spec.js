'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config');

describe('Config', function () {
    context('#ctor()', function() {
        it('should create config', function() {
            var config = new Config();

            expect(config).to.be.an(Config);

            ['extend', 'merge', 'defaults', 'toObject', 'clone'].forEach(function(name) {
                expect(config[name]).to.be.an(Function);
            });
        });
    });
});

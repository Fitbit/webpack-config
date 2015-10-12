'use strict';

var expect = require('expect.js'),
    Config = require('../lib/config'),
    ConfigFinder = require('../lib/configFinder');

var configFinder = ConfigFinder.INSTANCE;

describe('ConfigFinder', function () {
    context('#closest()', function() {
        it('should find config', function() {
            var config = configFinder.closest('./test/fixtures/dir1/dir2/dir3/webpack.1.config.js');

            expect(config).to.be.a(Config);
            expect(config.toObject()).to.eql({
                foo: 'foo1'
            });
        });

        it('should return "null" when config does not exist', function() {
            var config = configFinder.closest('./webpack.config.js');

            expect(config).to.eql(null);
        });
    });
});

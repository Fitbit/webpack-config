'use strict';

var path = require('path'),
    expect = require('expect.js'),
    ConfigPathResolver = require('../lib/configPathResolver');

var configPathResolver = ConfigPathResolver.INSTANCE;

describe('ConfigPathResolver', function () {
    context('#resolve()', function() {
        it('should return absolute path', function() {
            var filename = configPathResolver.resolve('webpack.config.js');

            expect(filename).to.eql(path.resolve('webpack.config.js'));
        });
    });
});

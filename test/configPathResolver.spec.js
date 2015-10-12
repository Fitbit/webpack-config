'use strict';

var path = require('path'),
    expect = require('expect.js'),
    ConfigPathResolver = require('../lib/configPathResolver'),
    ConfigNameResolver = require('../lib/configNameResolver');

describe('ConfigPathResolver', function () {
    var configNameResolver = new ConfigNameResolver(),
        configPathResolver = new ConfigPathResolver(configNameResolver);

    context('#resolve()', function() {
        it('should return absolute path', function() {
            var filename = configPathResolver.resolve('webpack.config.js');

            expect(filename).to.eql(path.resolve('webpack.config.js'));
        });
    });
});

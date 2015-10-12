'use strict';

var path = require('path'),
    fs = require('fs-extra'),
    expect = require('expect.js'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigPathResolver = require('../lib/configPathResolver');

var configPathResolver = ConfigPathResolver.INSTANCE,
    configLoader = ConfigLoader.INSTANCE;

describe('ConfigLoader', function () {
    context('#load()', function() {
        var filename = configPathResolver.resolve('./test/fixtures/tmp/webpack.config.js');

        function updateConfig() {
            fs.copySync(configPathResolver.resolve('./test/fixtures/webpack.2.config.js'), filename);
        }

        beforeEach(function() {
            configLoader.useCache = true;

            fs.copySync(configPathResolver.resolve('./test/fixtures/webpack.1.config.js'), filename);
        });

        afterEach(function() {
            fs.removeSync(path.dirname(filename));
        });

        it('should return same configs when "useCache" is "true"', function() {
            var config1 = configLoader.load(filename);

            updateConfig();

            var config2 = configLoader.load(filename);

            expect(config1.toObject()).to.eql(config2.toObject());
        });

        it('should return different configs when "useCache" is "false"', function () {
            var config1 = configLoader.load(filename);

            configLoader.useCache = false;

            updateConfig();

            var config2 = configLoader.load(filename);

            expect(config1.toObject()).not.to.eql(config2.toObject());
        });

        it('should throw exception if "filename" does not exist', function () {
            expect(configLoader.load).withArgs('./test/fixtures/webpack.not-found.config.js').to.throwError();
        });
    });
});

'use strict';

var Index = require('../index'),
    Config = require('../lib/config'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    ConfigFactory = require('../lib/configFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigFinder = require('../lib/configFinder'),
    ConfigVisitor = require('../lib/configVisitor'),
    ConfigNameResolver = require('../lib/configNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

describe('Index', function () {
    it('should export config', function() {
        var config = new Index();

        expect(config).toEqual(jasmine.any(Config));
    });

    it('should have static properties', function() {
        expect(Index.environment).toEqual(jasmine.any(ConfigEnvironment));
        expect(Index.nameResolver).toEqual(jasmine.any(ConfigNameResolver));
        expect(Index.factory).toEqual(jasmine.any(ConfigFactory));
        expect(Index.loader).toEqual(jasmine.any(ConfigLoader));
        expect(Index.finder).toEqual(jasmine.any(ConfigFinder));
        expect(Index.visitor).toEqual(jasmine.any(ConfigVisitor));
        expect(Index.pathResolver).toEqual(jasmine.any(ConfigPathResolver));
        expect(Index.FILENAME).toEqual('webpack.config.js');
    });
});

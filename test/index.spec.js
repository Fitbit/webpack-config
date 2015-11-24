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

        expect(config instanceof Config).toBeTruthy();
    });

    it('should have static properties', function() {
        expect(Index.environment instanceof ConfigEnvironment).toBeTruthy();
        expect(Index.nameResolver instanceof ConfigNameResolver).toBeTruthy();
        expect(Index.factory instanceof ConfigFactory).toBeTruthy();
        expect(Index.loader instanceof ConfigLoader).toBeTruthy();
        expect(Index.finder instanceof ConfigFinder).toBeTruthy();
        expect(Index.visitor instanceof ConfigVisitor).toBeTruthy();
        expect(Index.pathResolver instanceof ConfigPathResolver).toBeTruthy();
        expect(Index.FILENAME).toEqual('webpack.config.js');
    });
});

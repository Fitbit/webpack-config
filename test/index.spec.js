'use strict';

var expect = require('expect.js'),
    Index = require('../index'),
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

        expect(config).to.be.an(Config);
    });

    it('should have static properties', function() {
        expect(Index.environment).to.be.an(ConfigEnvironment);
        expect(Index.nameResolver).to.be.an(ConfigNameResolver);
        expect(Index.factory).to.be.an(ConfigFactory);
        expect(Index.loader).to.be.an(ConfigLoader);
        expect(Index.finder).to.be.an(ConfigFinder);
        expect(Index.visitor).to.be.an(ConfigVisitor);
        expect(Index.pathResolver).to.be.an(ConfigPathResolver);
        expect(Index.FILENAME).to.eql('webpack.config.js');
    });
});

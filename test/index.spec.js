'use strict';

var expect = require('expect.js'),
    Index = require('../index'),
    Config = require('../lib/config'),
    ConfigFactory = require('../lib/configFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigFinder = require('../lib/configFinder'),
    ConfigVisitor = require('../lib/configVisitor'),
    ConfigNameResolver = require('../lib/configNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

describe('Index', function () {
    it('should fill static properties', function() {
        expect(new Index()).to.be.an(Config);
        expect(Index.nameResolver).to.be.an(ConfigNameResolver);
        expect(Index.factory).to.be.an(ConfigFactory);
        expect(Index.loader).to.be.an(ConfigLoader);
        expect(Index.finder).to.be.an(ConfigFinder);
        expect(Index.visitor).to.be.an(ConfigVisitor);
        expect(Index.pathResolver).to.be.an(ConfigPathResolver);
    });
});

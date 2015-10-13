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
    it('should be instance of "Config" and should have methods', function() {
        var config = new Index();

        expect(config).to.be.an(Config);

        ['extend', 'merge', 'defaults', 'toObject', 'clone'].forEach(function(name) {
            expect(config[name]).to.be.an(Function);
        });
    });

    it('should fill static properties', function() {
        expect(Index.nameResolver).to.be.an(ConfigNameResolver);
        expect(Index.factory).to.be.an(ConfigFactory);
        expect(Index.loader).to.be.an(ConfigLoader);
        expect(Index.finder).to.be.an(ConfigFinder);
        expect(Index.visitor).to.be.an(ConfigVisitor);
        expect(Index.pathResolver).to.be.an(ConfigPathResolver);
        expect(Index.CONFIG_FILENAME).to.eql('webpack.config.js');
    });
});

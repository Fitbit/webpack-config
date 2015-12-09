'use strict';

var _ = require('lodash'),
    Index = require('../index'),
    Config = require('../lib/config'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    DefaultConfigLoader = require('../lib/defaultConfigLoader'),
    ConfigFinder = require('../lib/configFinder'),
    ConfigVisitor = require('../lib/configVisitor'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    DefaultConfigPathResolver = require('../lib/defaultConfigPathResolver');

describe('Index', function () {
    it('should export config', function() {
        var config = new Index();

        expect(config).toEqual(jasmine.any(Config));
    });

    it('should have static properties', function() {
        _.each({
            environment: ConfigEnvironment,
            nameResolver: DefaultConfigNameResolver,
            factory: DefaultConfigFactory,
            loader: DefaultConfigLoader,
            finder: ConfigFinder,
            visitor: ConfigVisitor,
            pathResolver: DefaultConfigPathResolver,
            FILENAME: String
        }, function(value, key) {
            expect(_.get(Index, key)).toEqual(jasmine.any(value));
        });

        expect(Index.FILENAME).toEqual('webpack.config.js');
    });
});

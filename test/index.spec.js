'use strict';

var _ = require('lodash'),
    Index = require('../index'),
    Config = require('../lib/config'),
    ConfigEnvironment = require('../lib/configEnvironment'),
    DefaultConfigFactory = require('../lib/defaultConfigFactory'),
    ConfigLoader = require('../lib/configLoader'),
    ConfigFinder = require('../lib/configFinder'),
    ConfigVisitor = require('../lib/configVisitor'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver'),
    ConfigPathResolver = require('../lib/configPathResolver');

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
            loader: ConfigLoader,
            finder: ConfigFinder,
            visitor: ConfigVisitor,
            pathResolver: ConfigPathResolver,
            FILENAME: String
        }, function(value, key) {
            expect(_.get(Index, key)).toEqual(jasmine.any(value));
        });

        expect(Index.FILENAME).toEqual('webpack.config.js');
    });
});

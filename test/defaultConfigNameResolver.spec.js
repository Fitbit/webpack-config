'use strict';

var InMemoryConfigEnvironment = require('../lib/inMemoryConfigEnvironment'),
    DefaultConfigNameResolver = require('../lib/defaultConfigNameResolver');

describe('DefaultConfigNameResolver', function () {
    var configEnvironment = new InMemoryConfigEnvironment(),
        configNameResolver = new DefaultConfigNameResolver(configEnvironment);

    configEnvironment.setAll({
        foo: 'foo',
        bar: 'bar',
        qux: function() {
            return 'qux';
        },
        quux: function() {
            return this.foo;
        }
    });

    describe('#resolveName()', function() {
        it('should replace `[foo]` with `foo`', function() {
            var filename = configNameResolver.resolveName('webpack.[foo].config.js');

            expect(filename).toEqual('webpack.foo.config.js');
        });

        it('should replace `[bar]` with `bar`', function() {
            var filename = configNameResolver.resolveName('webpack.[bar].config.js');

            expect(filename).toEqual('webpack.bar.config.js');
        });

        it('should replace `[qux]` with `qux', function() {
            var filename = configNameResolver.resolveName('webpack.[qux].config.js');

            expect(filename).toEqual('webpack.qux.config.js');
        });

        it('should replace `[quux]` with `foo', function() {
            var filename = configNameResolver.resolveName('webpack.[quux].config.js');

            expect(filename).toEqual('webpack.foo.config.js');
        });
});
});

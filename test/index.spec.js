'use strict';

var fs = require('fs-extra'),
    path = require('path'),
    expect = require('expect.js'),
    webpackConfig = require('../index');

var MODULE_NOT_FOUND = 'MODULE_NOT_FOUND',
    CONFIG_FILENAME = webpackConfig.CONFIG_FILENAME,
    fixtures = {
        fromCwd: path.resolve('./test/fixtures/index/fromCwd'),
        fromDirectory: path.resolve('./test/fixtures/index/fromDirectory'),
        fromFile: {
            config: path.resolve(path.join('./test/fixtures/index/fromFile', CONFIG_FILENAME)),
            multi: path.resolve(path.join('./test/fixtures/index/fromFile/multi', CONFIG_FILENAME))
        },
        closest: path.resolve('./test/fixtures/index/closest'),
        useCache: path.resolve(path.join('./test/fixtures/index/useCache', CONFIG_FILENAME))
    };

describe('Index', function () {
    describe('.fromObject()', function() {
        it('should create config from empty "{}" object', function () {
            var config = webpackConfig.fromObject({});

            expect(config).to.be.a(webpackConfig.Config);
        });

        it('should create multi config from empty "[]" array', function () {
            var config = webpackConfig.fromObject([]);

            expect(config).to.be.a(webpackConfig.MultiConfig);
        });
    });

    describe('.fromCwd()', function() {
        context('when file exists', function() {
            var cmd;

            before(function() {
                cmd = process.cwd();

                process.chdir(fixtures.fromCwd);
            });

            after(function() {
                process.chdir(cmd);
            });

            it('should load config', function() {
                expect(webpackConfig.fromCwd()).to.be.a(webpackConfig.Config);
            });
        });

        context('when file does not exist', function() {
            it('should throw exception', function() {
                expect(function() {
                    return webpackConfig.fromCwd();
                }).to.throwException(function(err) {
                    expect(err.code).to.be(MODULE_NOT_FOUND);
                });
            });
        });
    });

    describe('.fromDirectory()', function() {
        context('when directory exists', function() {
            it('should load config', function() {
                expect(webpackConfig.fromDirectory(fixtures.fromDirectory)).to.be.a(webpackConfig.Config);
            });
        });

        context('when directory does not exist', function() {
            it('should throw exception', function() {
                expect(function() {
                    return webpackConfig.fromDirectory(fixtures.fromDirectory + '-fake');
                }).to.throwException(function(err) {
                    expect(err.code).to.be(MODULE_NOT_FOUND);
                });
            });
        });
    });

    describe('.fromFile()', function() {
        context('when file exists', function() {
            it('should load config', function() {
                expect(webpackConfig.fromFile(fixtures.fromFile.config)).to.be.a(webpackConfig.Config);
            });

            it('should load multi config', function() {
                expect(webpackConfig.fromFile(fixtures.fromFile.multi)).to.be.a(webpackConfig.MultiConfig);
            });
        });

        context('when file does not exist', function() {
            it('should throw exception', function() {
                expect(function() {
                    return webpackConfig.fromFile(fixtures.fromFile.config + '-fake');
                }).to.throwException(function(err) {
                    expect(err.code).to.be(MODULE_NOT_FOUND);
                });
            });
        });
    });

    describe('.closest()', function() {
        context('when file exists', function() {
            it('should return path', function() {
                expect(webpackConfig.closest(path.join(fixtures.closest, 'foo', 'bar'))).to.be(path.join(fixtures.closest, CONFIG_FILENAME));
            });
        });

        context('when file does not exist', function() {
            it('should return null', function() {
                expect(webpackConfig.closest(path.resolve('./'))).to.be(null);
            });
        });
    });

    describe('.useCache', function() {
        function createConfig() {
            fs.copySync(fixtures.useCache + '-original', fixtures.useCache);
        }

        function updateConfig() {
            fs.copySync(fixtures.useCache + '-updated', fixtures.useCache);
        }

        function loadConfig() {
            return webpackConfig.fromFile(fixtures.useCache);
        }

        function removeConfig() {
            fs.removeSync(fixtures.useCache);
        }

        beforeEach(function() {
            webpackConfig.useCache = true;

            createConfig();
        });

        afterEach(function() {
            removeConfig();
        });

        context('when "true"', function() {
            it('.fromFile() should return same configs', function() {
                var expectedConfig = loadConfig();

                updateConfig();

                var actualConfig = loadConfig();

                expect(expectedConfig).to.eql(actualConfig);
            });
        });

        context('when "false"', function() {
            it('.fromFile() should return different configs', function() {
                var expectedConfig = loadConfig();

                updateConfig();

                webpackConfig.useCache = false;

                var actualConfig = loadConfig();

                expect(expectedConfig).not.to.eql(actualConfig);
            });
        });
    });
});

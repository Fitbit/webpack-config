'use strict';

var path = require('path'),
    fs = require('fs'),
    util = require('./util');

var CONFIG_FILENAME = 'webpack.config.js';

var defaultAttributes = {
    context: process.cwd(),
    entry: {},
    output: {},
    module: {
        loaders: []
    },
    resolve: {
        root: [],
        modulesDirectories: []
    },
    plugins: []
};

function Config(attributes) {
    util.merge(this, defaultAttributes);

    this.merge(attributes);
}

Config.prototype.merge = function(attributes) {
    if (!attributes) { attributes = {}; }

    util.merge(this, attributes);

    return this;
};

Config.prototype.extend = function(attributes) {
    if (!attributes) { attributes = {}; }

    var config = new Config(this);

    return config.merge(attributes);
};

Config.from = function(attributes) {
    return new Config(attributes);
};

Config.load = function(filename) {
    if (filename) {
        if (fs.lstatSync(filename).isDirectory()) {
            filename = path.join(filename, CONFIG_FILENAME);
        }
    } else {
        filename = path.join(process.cwd(), CONFIG_FILENAME);
    }

    filename = path.resolve(filename);

    var attributes = require(filename);

    return Config.from(attributes);
};

module.exports = Config;
module.exports.CONFIG_FILENAME = CONFIG_FILENAME;

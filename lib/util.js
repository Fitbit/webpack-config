'use strict';

var path = require('path'),
    fs = require('fs');

function find(dirname, basename) {
    if (!dirname.length) {
        return null;
    }

    var filename = path.join(dirname, basename);

    if (fs.existsSync(filename)) {
        return filename;
    }

    var paths = dirname.split(path.sep);

    dirname = paths.slice(0, paths.length - 1).join(path.sep);

    return find(dirname, basename);
}

function load(filename, useCache) {
    filename = path.resolve(filename);

    if (useCache === false) {
        delete require.cache[filename];
    }

    return require(filename);
}

module.exports = {
    find: find,
    load: load
};

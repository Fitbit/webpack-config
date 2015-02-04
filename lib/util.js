'use strict';

var path = require('path'),
    fs = require('fs');

function isArray(value) {
    return Array.isArray(value);
}

function isNumber(value) {
    return typeof value === 'number';
}

function isObject(value) {
    return value != null && typeof value === 'object';
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function merge(source, target) {
    if (!isObject(source)) { source = {}; }
    if (!isObject(target)) { target = {}; }

    Object.keys(target).forEach(function(key) {
        var property = target[key];

        if (isArray(property)) {
            if (!source[key]) {
                source[key] = [];
            }

            property.forEach(function(prop) {
                if (source[key].indexOf(prop) === -1) {
                    source[key].push(prop);
                }
            });
            return;
        }

        if (isArray(source[key]) && !isArray(property) && isNumber(property)) {
            source[key][0] = target[key];
            return;
        }

        if (isObject(property) && !isArray(property)) {
            source[key] = merge(source[key] || {}, target[key]);
        } else {
            source[key] = target[key];
        }
    });

    return source;
}

function find(dirname, filename) {
    if (!dirname.length) {
        return null;
    }

    var filepath = path.join(dirname, filename);

    if (fs.existsSync(filepath)) {
        return filepath;
    }

    var paths = dirname.split(path.sep);

    dirname = paths.slice(0, paths.length - 1).join(path.sep);

    return find(dirname, filename);
}

function load(filename, cached) {
    if (isUndefined(cached)) { cached = true; }

    filename = path.resolve(filename);

    if (cached === false) {
        delete require.cache[filename];
    }

    return require(filename);
}

module.exports = {
    merge: merge,
    find: find,
    load: load
};

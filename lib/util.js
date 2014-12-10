'use strict';

var path = require('path'),
    fs = require('fs');

module.exports.merge = function merge(source, target) {
    Object.keys(target).forEach(function(key) {
        var property = target[key];

        if (Array.isArray(property)) {
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

        if (Array.isArray(source[key]) && !Array.isArray(property) && typeof property === 'number') {
            source[key][0] = target[key];
            return;
        }

        if (typeof property === 'object' && !Array.isArray(property)) {
            source[key] = merge(source[key] || {}, target[key]);
        } else {
            source[key] = target[key];
        }
    });

    return source;
};

module.exports.find = function find(dirname, filename) {
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
};

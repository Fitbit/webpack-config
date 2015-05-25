'use strict';

var path = require('path'),
    fs = require('fs'),
    _ = require('lodash');

module.exports = {
    find: function(dirname, basename) {
        if (!dirname.length) {
            return null;
        }

        var filename = path.join(dirname, basename);

        if (fs.existsSync(filename)) {
            return filename;
        }

        var paths = dirname.split(path.sep);

        dirname = paths.slice(0, paths.length - 1).join(path.sep);

        return this.find(dirname, basename);
    },

    load: function(filename, useCache) {
        filename = path.resolve(filename);

        if (useCache === false) {
            delete require.cache[filename];
        }

        return require(filename);
    },

    merge: function(target, source) {
        return _.merge(target, source, function(x, y) {
            if (_.isArray(x)) {
                return x.concat(y);
            }
        });
    },

    defaults: _.partialRight(_.merge, function recursiveDefaults() {
        if (_.isArray(arguments[0]) || _.isDate(arguments[0])) {
            return arguments[0];
        }

        return _.merge(arguments[0], arguments[1], recursiveDefaults);
    }),

    toPlainObject: function(value) {
        return _.omit(value, function(val, key) {
            return !_.has(this, key);
        }, value);
    }
};

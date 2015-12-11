'use strict';

var _ = require('lodash'),
    Config = require('../lib/config');

describe('Config', function () {
    describe('#ctor()', function() {
        it('should have mixins', function() {
            var config = new Config();

            _.each({
                extend: Function,
                merge: Function,
                defaults: Function,
                toObject: Function,
                clone: Function
            }, function(value, key) {
                expect(_.get(config, key)).toEqual(jasmine.any(value));
            });
        });
    });
});

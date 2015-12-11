'use strict';

var Jasmine = require('jasmine'),
    SpecReporter = require('jasmine-spec-reporter');

var JASMINE_CONFIG_PATH = './jasmine.json',
    jasmine = new Jasmine();

jasmine.configureDefaultReporter({
    print: function() {}
});
jasmine.addReporter(new SpecReporter());
jasmine.loadConfigFile(JASMINE_CONFIG_PATH);
jasmine.execute();

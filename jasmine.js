'use strict';

var Jasmine = require('jasmine'),
    SpecReporter = require('jasmine-spec-reporter');

var jasmine = new Jasmine();

jasmine.configureDefaultReporter({
    print: function() {}
});
jasmine.addReporter(new SpecReporter());
jasmine.loadConfigFile(process.env.JASMINE_CONFIG_PATH);
jasmine.execute();

import Jasmine from 'jasmine';
import SpecReporter from 'jasmine-spec-reporter';

const JASMINE_CONFIG_PATH = './jasmine.json';

const jasmine = new Jasmine();

jasmine.configureDefaultReporter({print: () => {}});
jasmine.env.clearReporters();
jasmine.addReporter(new SpecReporter());
jasmine.loadConfigFile(JASMINE_CONFIG_PATH);
jasmine.execute();

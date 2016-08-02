import {
    Config,
    ConfigEnvironment
} from 'webpack-config';

ConfigEnvironment.INSTANCE.setAll({
    env: () => process.env.NODE_ENV
});

export default new Config().extend('conf/webpack.[env].config.js');

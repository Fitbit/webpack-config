import WebpackConfig from 'webpack-config';

export default new WebpackConfig().extend(
    'mdreizin/base',
    'mdreizin/css',
    'mdreizin/html',
    'webpack-config-mdreizin/json'
    // etc
);

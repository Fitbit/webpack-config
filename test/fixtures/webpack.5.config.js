'use strict';

module.exports = {
    debug: false,
    extend: {
        './test/fixtures/webpack.4.config.js': function(config) {
            config.visited = ['./test/fixtures/webpack.4.config.js'];

            return config;
        }
    },
    resolve: {
        alias: {
            config: './test/fixtures/webpack.5.config.js'
        }
    }
};

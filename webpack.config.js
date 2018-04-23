var webpack = require('webpack');

module.exports = {
    // entry: './frontend/js/index.js',
    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //     filename: 'js/index.js'
    // },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
        ]
    },
};

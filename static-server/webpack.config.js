var webpack = require('webpack');

module.exports = {
    output: {
        path:  __dirname + "/public/dist",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'SDK_BUILD_ID': JSON.stringify(process.env.BUILD_ID),
        })
    ]
};

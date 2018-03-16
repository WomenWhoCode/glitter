const webpack = require('webpack');
const ExtractTextPlugin = require("mini-css-extract-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css",
});

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                ExtractTextPlugin.loader,
                {
                    loader: "css-loader",
                    // options: { minimize: true },
                },
                {
                    loader: "sass-loader",
                },
            ],
        }],
    },
    plugins: [
        extractSass
    ]
};

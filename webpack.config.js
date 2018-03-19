const webpack = require('webpack');
const ExtractTextPlugin = require("mini-css-extract-plugin");
const WebpackAutoInject = require('webpack-auto-inject-version');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                ExtractTextPlugin.loader,
                {
                    loader: "css-loader",
                },
                {
                    loader: "sass-loader",
                },
            ],
        }],
    },
    plugins: [
        new WebpackAutoInject({
            components: {AutoIncreaseVersion: false},
            SHORT: 'https://github.com/WomenWhoCode/glitter',
            componentsOptions: {
                InjectAsComment: {
                    tag: 'Build: v{version} - {date}',
                    dateFormat: 'yyyy-mm-dd',
                },
            },
        }),
        new ExtractTextPlugin({filename: "[name].css"}),
    ]
};

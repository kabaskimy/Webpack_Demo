var webpack = require('webpack');
module.exports = {
    entry: "./app/demo1.js",
    output: {
        path: __dirname + '/app',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('demo from kabaskimy')
    ]
}
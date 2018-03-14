var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry : [
        "babel-polyfill",path.resolve(__dirname,'../src/components/index.jsx')
    ],
    output : {
        path: path.resolve(__dirname,'../dist'),
        publicPath : '/',
        filename : 'bundle.js'
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    resolve : {
        extensions : ['.js','.json']
    },
    module : {
        rules : [
            {
                test : [/\.js?$/,/\.jsx?$/],
                loader : 'babel-loader',
                exclude : /(node_modules)/,
                query : {
                    presets : ['es2015','react']
                }
            },
            {
                test: [/\.css$/],
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
}

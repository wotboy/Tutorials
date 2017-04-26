var path = require('path');

module.exports = {
    context: path.resolve(__dirname,'js'),
    entry: path.resolve(__dirname,'js/app.js'),
    devtool: 'eval-source-map',
    cache: true,
    //watch: true,

    devServer: {
    	//port:8080,
    	compress:true,
    	//contentBase:false,
    },

    output: {
        path: path.resolve(__dirname,'js/built'),
        filename: 'bundle.js',
        pathinfo: true,
        //publicPath: "/assets/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

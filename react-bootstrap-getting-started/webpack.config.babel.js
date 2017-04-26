var path = require('path');

module.exports =  {
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'public/'
  },
  module: {
    loaders: [
      // Used for compiling ES2015 JavaScript
      { test: /\.js/, loader: 'babel-loader',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'react']
          }
      },
      // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader' },
      // Used for Bootstrap Less Source Files
      { test: /\.css/, loader: 'style-loader!css-loader' },
      // Used for Bootstrap Glyphicon Fonts
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file-loader' }
    ]
  }
};

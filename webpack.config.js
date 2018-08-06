const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  resolve: { alias: { 'react': path.resolve(__dirname, './node_modules', 'react') } },
  output: {
    filename: 'index.build.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [ 
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
      
    ]
  }
};

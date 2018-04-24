const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  stats: 'errors-only', /* возможно, стоит выводить предупреждения? */
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          // 'cache-loader',
          'babel-loader',
        ],
        include: path.resolve('src'),
      }
    ]
  }
};

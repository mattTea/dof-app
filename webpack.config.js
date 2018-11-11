const path = require('path');
const webpack = require('webpack')
const DefinePlugin = webpack.DefinePlugin

module.exports = (env) => {
  const isProduction = env === 'production';
  
  console.log('env', env);
  return {
    entry: './src/app.js',
    // entry: './src/playground/hoc.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      }]
    },
    devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    },
    plugins: [
      new DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(env)
        }
      })
    ]
  };
};

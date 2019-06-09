const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config.js');
const Dotenv = require('dotenv-webpack');

const dotConfig = new Dotenv({
  path: './.env'
});

config.mode = 'production';
config.output.path = __dirname + "/build/prod";

config.plugins = config.plugins.concat([
  new CleanWebpackPlugin(['build/prod']),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'updatedAt': JSON.stringify(new Date())
    }
  }),
  dotConfig
]);

module.exports = config;

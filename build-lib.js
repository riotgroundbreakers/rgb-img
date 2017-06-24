'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

// var webpack = require('webpack');
var path = require('path');

// currently, this is for bower
var config = {
  devtool: 'sourcemap',
  entry: {
    index: './src/rgb-text.js'
  },
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: 'lib/',
    filename: 'rgb-text.js',
    sourceMapFilename: 'rgb-text.map',
    library: 'RgbText',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      use: 'babel-loader'
    }]
  },
  plugins: [],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
};

module.exports = config;
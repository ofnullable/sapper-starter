const path = require('path');
const webpack = require('webpack');
const sapper = require('sapper/config/webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const preprocess = require('./svelte.config');
const pkg = require('./package.json');

const mode = process.env.NODE_ENV || 'development';
const dev = mode !== 'production';
const externals = Object.keys(pkg.dependencies).concat('encoding');
const resolve = {
  alias: { svelte: path.resolve('node_modules', 'svelte') },
  extensions: ['.mjs', '.js', '.json', '.svelte'],
  mainFields: ['svelte', 'module', 'browser', 'main'],
};

const loaders = {
  svelte(isServer) {
    return {
      loader: 'svelte-loader',
      options: isServer
        ? {
            dev,
            preprocess,
            css: false,
            emitCss: true,
            generate: 'ssr',
          }
        : {
            dev,
            preprocess,
            css: false,
            emitCss: true,
            hydratable: true,
          },
    };
  },
  style(isServer) {
    return isServer || dev ? 'style-loader' : MiniCssExtractPlugin.loader;
  },
  babel: {
    loader: 'babel-loader',
    options: {
      compact: false,
      cacheDirectory: !dev,
    },
  },
  css: 'css-loader',
  sass: 'sass-loader',
  postcss: 'postcss-loader',
  url: {
    loader: 'url-loader',
    options: {
      limit: 8192,
      name: '[hash]/media/[name].[ext]',
    },
  },
};

module.exports = {
  client: {
    mode,
    resolve,
    devtool: dev ? 'inline-source-map' : 'hidden-source-map',
    entry: sapper.client.entry(),
    output: sapper.client.output(),
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: [loaders.babel, loaders.svelte(false)],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!svelte)/,
          use: [loaders.babel],
        },
        {
          test: /\.(c|sa|sc)ss$/,
          use: [loaders.style(false), loaders.css, loaders.postcss, loaders.sass],
        },
        {
          test: /\.(jpe?g|png|gif|bmp)$/,
          use: [loaders.url],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      !dev &&
        new MiniCssExtractPlugin({
          filename: '[hash]/[name].css',
          chunkFilename: '[hash]/[name].[id].css',
        }),
    ].filter(Boolean),
  },

  server: {
    mode,
    resolve,
    externals,
    target: 'node',
    entry: sapper.server.entry(),
    output: sapper.server.output(),
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: [loaders.babel, loaders.svelte(true)],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!svelte)/,
          use: [loaders.babel],
        },
        {
          test: /\.(c|sa|sc)ss$/,
          use: [
            loaders.style(true),
            { loader: loaders.css, options: { onlyLocals: true } },
            loaders.postcss,
            loaders.sass,
          ],
        },
        {
          test: /\.(jpe?g|png|gif|bmp)$/,
          use: [loaders.url],
        },
      ],
    },
  },
};

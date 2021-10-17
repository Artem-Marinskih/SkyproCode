const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            test: /\.styl$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "stylus-loader", // compiles Styl to CSS
            ]
            
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.ttf$/,
            use: ['file-loader']
          }
        ],
      },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
      plugins: [
          new MiniCssExtractPlugin(),
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
            scriptLoading: 'blocking',
            template: './src/index.html',
            inject: 'body',
          }),
          new MonacoWebpackPlugin({
            languages: ['css', 'html', 'javascript', 'json', 'typescript'], 
            features: ['format', 'contextmenu']
          }),
      ]
  };
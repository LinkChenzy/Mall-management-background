/*
 * @Author: chenzhiyuan
 * @Date:   2018-05-24 23:35:32
 * @Last Modified by:   chenzhiyuan
 * @Last Modified time: 2018-05-25 17:33:17
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath:'/dist/',   //公共的路徑
		filename: 'js/app.js'
	},
	module: {
		rules: [{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			}, {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}, {
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			}, {
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'resource/[name].[ext]'
					}
				}]
			}, // 字体图标的配置
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'resource/[name].[ext]'
					}
				}]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon: 'favicon.ico'
		}),
		new ExtractTextPlugin("css/[name].css"),
		// 提出公共模快
		new webpack.optimize.CommonsChunkPlugin({
			name:'common',
			filename:'js/base.js'
		}),
	],
	devServer: {
		port: 9000
	}
};
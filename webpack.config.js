var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: ['./src/main.ts'],
	output: {
		path: './dist',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['ts-loader', 'angular2-template-loader']
			},
			{
				test: /\.html$/,
				loader: 'html'
			},
			{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            }
		]
	},
	resolve: {
		extensions: ['', '.js', '.ts']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin('style.css')
	]
};
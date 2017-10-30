const path = require('path'); // this is handled by node.js
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),//which filter
		filename: 'bundle.js',
		publicPath: 'build/', // where to look for the files placed in the output folder
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
			},
			{
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader',
				}),
				test: /\.css$/,
			},
			{
				test: /\.(jpe?g|png|svg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: { limit: 40000 }, // imgaes that are > 40000 KB in size save in output folder
					},
					'image-webpack-loader',
				],
			},
		],
	},
	plugins: [
		// tells the library to extract all files its loader transfored and put it in style.css
		new ExtractTextPlugin('style.css'),
	]
};

module.exports = config;

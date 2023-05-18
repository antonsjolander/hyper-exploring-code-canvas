const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./app.js",
	output: {
		filename: "./dist/bundle.js",
	},
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
			},
		],
	},
};

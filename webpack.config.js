const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/app.js",
	output: {
		filename: "./dist/bundle.js",
	},
	devServer: {
		contentBase: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
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

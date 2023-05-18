const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devServer: {
		open: true,
		compress: true,
		hot: true,
		port: 8080,
		historyApiFallback: true,
		static: "./dist",
	},
	entry: {
		main: path.resolve(__dirname, "./src/app.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].bundle.js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"), // template file
			filename: "index.html", // output file
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};

var path = require("path");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
	entry: path.join(__dirname, "assets/src/index"),
	output: {
		path: path.join(__dirname, "assets/dist"),
	},
	plugins: [
		new BundleTracker({
			filename: "webpack-stats.json"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
};

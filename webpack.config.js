module.exports = {
	entry: "./js/main.js",
	output: {filename: "./dist/bundle.js"},

	// Enables ES6 modules to be loaded w/ "root/project paths"
	resolve: {
		modules: [
			__dirname + '/js'
		]
	},

	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ['es2015'],
				plugins: ['transform-runtime']
			}
		},
		{
			test: /\.scss$/,
			use: [
				{
					loader: "sass-loader"
				}
			]
		}
		]
	}
};

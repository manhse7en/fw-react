module.exports = {
	mode: process.env.NODE_ENV || 'production',
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [
						'react',
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}]
					]
				}
			}
		]
	}
}
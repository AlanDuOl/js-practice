const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './js/app.js',
	devServer: {
        contentBase: "dist",
        port: 3000
    },
	plugins: [
		new HtmlWebpackPlugin(),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ["@babel/preset-env"]
				}
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	}
}
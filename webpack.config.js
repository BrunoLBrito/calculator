// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production', // development
  entry: './src/main.js', // Arquivo de entrada principal do seu projeto
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js' // Nome do arquivo de saída (gerado pelo Webpack)
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpilar todos os arquivos .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html' // Caminho para o arquivo index.html
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
}

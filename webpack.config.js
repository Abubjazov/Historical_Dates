const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const FontPreloadPlugin = require('webpack-font-preload-plugin')

module.exports = {
  entry: {
    index: './src/index.tsx',
  },
  plugins: [
    new FaviconsWebpackPlugin('./public/assets/logo.png'),
    new MiniCssExtractPlugin({
      filename: 'index.min.css',
    }),
    new FontPreloadPlugin({
      extensions: ['ttf'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: ['imagemin-pngquant'],
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                namedExport: false,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.png$/i,
        type: 'asset',
        use: [ImageMinimizerPlugin.loader],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      mockData: path.resolve(__dirname, 'src/mockData/'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    open: true,
  },
}

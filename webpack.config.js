const path = require('path'),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  Extractor = require('extract-text-webpack-plugin'),
  config = {
    sourcePath: path.join(__dirname, './src'),
    staticsPath: path.join(__dirname, './public'),
    publicPath: ''
  },
  plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Extractor('styles/[hash]-[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'javascript/[hash]-vendor.js',
    }),
    new HtmlWebpackPlugin({
      publicPath: config.publicPath,
      // filename: '../views/home/chat.html',
      filename: 'index.html',
      template: '!!handlebars-loader!./src/components/templates/index.hbs',
      inject: false
    }),
    new webpack.DefinePlugin({
      postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie 7-8', 'Firefox > 20'] })]
    })
  ],

  devServer = {
    publicPath: config.publicPath,
    contentBase: config.sourcePath,
    historyApiFallback: true,
    port: 3001,
    compress: false,
    lazy: false,
    inline: true,
    hot: true,
    proxy: {
      '/static': {
        target: 'http://localhost:3000'
      }
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: true,
      timings: true,
      version: false,
      warnings: true
    }
  };

module.exports = {
  cache: true,
  devtool: 'source-map',
  context: config.sourcePath,
  entry: {
    app: './index.jsx',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: config.staticsPath,
    filename: 'javascript/[hash]-[name].js',
    publicPath: config.publicPath
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loader: Extractor.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader' })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [`${__dirname}/node_modules`, config.sourcePath]
  },
  performance: {
    hints: false
  },
  plugins,
  devServer
};

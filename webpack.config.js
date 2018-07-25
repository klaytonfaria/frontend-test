const path = require('path'),
  webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  Extractor = require('extract-text-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  config = {
    sourcePath: path.join(__dirname, './src'),
    staticsPath: path.join(__dirname, './public'),
    publicPath: process.env.NODE_ENV === 'production' ? '/static/' : ''
  },
  plugins = [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Extractor({ filename: 'styles/[hash]-[name].css', disable: false, allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'javascript/[hash]-vendor.js',
    }),
    new HtmlWebpackPlugin({
      publicPath: config.publicPath,
      // filename: '../views/home/chat.html',
      filename: process.env.NODE_ENV === 'production' ? '../views/home/chat.html' : 'index.html',
      template: '!!handlebars-loader!./src/components/templates/index.hbs',
      inject: false
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        output: {
          path: config.staticsPath,
          publicPath: config.publicPath
        },
        postcss: [autoprefixer({ browsers: ['last 2 versions', 'ie 7-8', 'Firefox > 20'] })]
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(config.sourcePath, '/images/**/*'),
        to: path.join(config.staticsPath, '/')
      }
    ])
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
    proxy: [
      {
        context: '/static/images',
        target: 'http://localhost:3001/images',
        pathRewrite: {"^/static/images" : ""}
      },
      {
        context: '/static',
        target: 'http://localhost:3000'
      },
    ],
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
        test: /-font\.js$/,
        loader: Extractor.extract({ loader: 'css-loader!postcss-loader!fontgen-loader' })
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loader: Extractor.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader!sass-loader' })
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

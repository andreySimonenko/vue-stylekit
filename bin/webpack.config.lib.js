const { VueLoaderPlugin } = require(`vue-loader`);

const path = require(`path`);
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const OptimizeCSSAssetsPlugin = require(`optimize-css-assets-webpack-plugin`);
const env = process.env.NODE_ENV;
const local_dirname = path.join(__dirname,'..');

const config = {
  entry: {
    'vue-rt-style':[path.join(local_dirname, `src`, `lib`, `index.js`)],
  },
  mode: env,
  output: {
    path: local_dirname + '/lib',
    filename: 'vue-rt-style.js',
    library: 'vue-rt-style',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: `vue-loader`,
            options: {
              transformAssetUrls: {
                source: './src/',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: `css-loader`},
            ],
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(local_dirname, `src`)],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader:`css-loader`},
          {
            loader: `less-loader`,
          },
        ],
      },
      {
        test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani|eot|svg)$/,
        loader: `url-loader`,
        options: {
          name: `[name].[hash:20].[ext]`,
          limit: 10000,
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ]
};




module.exports = config;
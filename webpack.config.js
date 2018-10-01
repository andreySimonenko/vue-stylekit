const { VueLoaderPlugin } = require(`vue-loader`);
const path = require(`path`);

// const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const MiniCssExtractPlugin = require(`mini-css-extract-plugin`);
const webpack = require('webpack');
// const MonacoWebpackPlugin = require(`monaco-editor-webpack-plugin`)

const env = process.env.NODE_ENV;
const minify = env === `production`;
const sourceMap = env === `development`;
function resolve(dir) {
  return path.join(__dirname, dir);
}

const config = {
  entry: {
    "vue_rt_style":[path.join(__dirname, `src`, `index.js`)],
  },
  mode: env,
  output: {
    publicPath: `/`,
    // filename: 'vue_rt_style.js'
  },
  resolve: {
    alias: {
      '@': resolve('src/app/dist/components'),
    },
  },
  devtool: sourceMap ? `cheap-module-eval-source-map` : undefined,
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
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader:`css-loader`
          },
        ],
      },
      {
        test: /\.js$/,
        loader: `babel-loader`,
        include: [path.join(__dirname, `src`)],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },

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
          name: `[name ].[hash:20].[ext]`,
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    // new MonacoWebpackPlugin(webpack,{
    //   languages: ['html'],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: path.join(__dirname, `dist`, `index.html`),
    //   template: path.join(__dirname, `static`, `index.html`),
    //   inject: true,
    //   minify: minify
    //     ? {
    //         removeComments: true,
    //         collapseWhitespace: true,
    //         removeAttributeQuotes: true,
    //       }
    //     : false,
    // }),
  ]
};

console.log('env',env)
if (env !== `development`) {
  config.plugins.push(new MiniCssExtractPlugin());
}else{
  config.entry.app.unshift('webpack-hot-middleware/client')
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

module.exports = config;

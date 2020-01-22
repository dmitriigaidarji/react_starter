const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: [
    "./entry/index.tsx"
  ],
  output: {
    filename: "bundle.js",
    chunkFilename: '[name].bundle.js',
    path: __dirname + "/build"
  },
  plugins: [
    new HtmlWebpackPlugin(({
      filename: 'index.html',
      template: 'index.html'
    })),
    // new CopyWebpackPlugin(['name.ico']),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {
            loader: "awesome-typescript-loader", options: {
              transpileOnly: false,
              "useBabel": true,
              "babelOptions": {
                "babelrc": false, /* Important line */
                "compact": true,
                "presets": [
                  ["@babel/preset-env",
                    {
                      "targets": {
                        "browsers": [
                          "IE >= 10"]
                      },
                      "modules": false,
                      "useBuiltIns": "entry",
                      "corejs": 3
                    }
                  ]
                ],
                "plugins": ["@babel/plugin-syntax-dynamic-import"]
              },
              "babelCore": "@babel/core", // needed for Babel v7
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "resolve-url-loader"},
          {loader: "sass-loader"}
        ]
      }
    ]
  },
  stats: 'minimal'
};

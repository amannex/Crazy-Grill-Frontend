const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const Path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
   return {
      entry: "./src/index.js",
      output: {
         path: Path.resolve(Path.dirname(__dirname), "dist"),
         filename: "index.js",
         publicPath: "/"
      },
      devServer: {
         hot: true,
         historyApiFallback: {
            index: "/index.html"
         },
         static: {
            directory: "./public"
         },
         host: "0.0.0.0",
         watchFiles: {
            options: {
               ignored: ["node_modules"]
            }
         },
         proxy: {
            "/api": "http://taburestaurant.ca/"
         }
      },
      module: {
         rules: [
            {
               test: /\.svg$/,
               use: ["@svgr/webpack"]
            },
            {
               test: /\.(js|jsx)?$/,
               exclude: /node_modules/,
               use: [
                  {
                     loader: "babel-loader"
                  }
               ]
            },
            {
               test: /\.html$/,
               use: [
                  {
                     loader: "html-loader"
                  }
               ]
            },
            {
               test: /\.css$/,
               use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: "asset/resource"
            }
         ]
      },
      plugins: [
         //Useful for OSX systems
         new CaseSensitivePathsPlugin(),
         //create an Html file with the script tag setted to the bundle file when building
         new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "index.html",
            minify: {
               collapseWhitespace: true,
               removeComments: true,
               removeRedundantAttributes: true,
               removeScriptTypeAttributes: true,
               removeStyleLinkTypeAttributes: true,
               useShortDoctype: true
            }
         }),
         //copy static files from public folder except index.html
         new CopyPlugin({
            patterns: [
               {
                  from: "public",
                  to: "./",
                  filter: resourcePath => Path.basename(resourcePath) !== "index.html"
               }
            ]
         }),
         new webpack.DefinePlugin({
            "process.env": "{}"
         })
      ]
   };
};

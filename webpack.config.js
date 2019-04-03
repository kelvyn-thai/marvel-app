const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: [
        './src/client/App.tsx'
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx","jsx", ".js", ".json"],
        alias: {
            App: path.resolve(__dirname, 'src/client/modules/App'),
            Home: path.resolve(__dirname, 'src/client/modules/Home'),
            NotFound: path.resolve(__dirname, 'src/client/modules/NotFound'),
            Redux: path.resolve(__dirname, 'src/client/redux'),
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, loader: "ts-loader" 
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader" 
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader',  'sass-loader']
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: 'file-loader',
                  }
                ]
              }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'manifest/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    // devServer: {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //     },
    //     historyApiFallback: true,
    //     contentBase: path.join(__dirname, 'public'),
    // }
}
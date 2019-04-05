const path = require('path');
const webpack = require('webpack');
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
        extensions: [".ts", ".tsx", "jsx", ".js", ".json"],
        alias: {
            App: path.resolve(__dirname, 'src/client/modules/App'),
            Home: path.resolve(__dirname, 'src/client/modules/Home'),
            Comics: path.resolve(__dirname, 'src/client/modules/Comics'),
            Share: path.resolve(__dirname, 'src/client/modules/Share'),
            NotFound: path.resolve(__dirname, 'src/client/modules/NotFound'),
            Redux: path.resolve(__dirname, 'src/client/redux'),
            Config: path.resolve(__dirname, 'src/client/config/index.ts'),
            ApiServices: path.resolve(__dirname, 'src/client/api/index.ts'),
        }
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'assets/build')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: "ts-loader"
            },
            {
                enforce: "pre", test: /\.jsx?$/, loader: "source-map-loader"
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'assets'),
        contentBase: './',
        hot: true
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}

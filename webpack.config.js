const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        entry: {
            bundle: './src/client/App.tsx',
        },
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
            alias: {
                '@app': path.resolve(__dirname, 'src/client/modules/App'),
                '@home': path.resolve(__dirname, 'src/client/modules/Home'),
                '@comics': path.resolve(__dirname, 'src/client/modules/Comics'),
                '@share': path.resolve(__dirname, 'src/client/modules/Share'),
                '@not-found': path.resolve(__dirname, 'src/client/modules/NotFound'),
                '@redux': path.resolve(__dirname, 'src/client/redux'),
                '@config': path.resolve(__dirname, 'src/client/config/index.ts'),
                '@api-services': path.resolve(__dirname, 'src/client/api/index.ts'),
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
                    test: /\.s?css$/,
                    use: ExtractTextPlugin.extract({
                      fallback: "style-loader",
                      use: ['css-loader', 'sass-loader']
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf|mp3|mp4)$/,
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
                },
                
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'manifest/index.html'
            }),
            new CleanWebpackPlugin(),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.DefinePlugin({
                BROWSER_SIDE: true
            }),
            new ExtractTextPlugin("styles.css"),

        ],
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
            },
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'assets'),
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
        },
        watch: true
    },
    {
        entry: {
            server: './src/server/index.tsx'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'assets/build')
        },
        resolve: {
            extensions: [".ts", ".tsx", ".jsx", ".json", ".js"],
            alias: {
                '@doten-config': path.resolve(__dirname, './config.ts'),
                '@app': path.resolve(__dirname, 'src/client/modules/App'),
                '@home': path.resolve(__dirname, 'src/client/modules/Home'),
                '@comics': path.resolve(__dirname, 'src/client/modules/Comics'),
                '@share': path.resolve(__dirname, 'src/client/modules/Share'),
                '@not-found': path.resolve(__dirname, 'src/client/modules/NotFound'),
                '@redux': path.resolve(__dirname, 'src/client/redux'),
                '@config': path.resolve(__dirname, 'src/client/config/index.ts'),
                '@api-services': path.resolve(__dirname, 'src/client/api/index.ts'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/, loader: "ts-loader"
                },
                {
                    test: /\.s?css$/,
                    use: ['ignore-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf|mp3|mp4)$/,
                    use: [
                        {
                            loader: 'file-loader',
                        }
                    ]
                },
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                BROWSER_SIDE: false
            }),
        ],
        target: 'node',
        externals: [nodeExternals()],
        watch: true
    }
]
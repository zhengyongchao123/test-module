// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = (env) => {
    const isBundleAnalyzerPlugin = env.analyzer;
    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        mode: isProduction ? 'production' : 'development',
        devServer: {
            open: true,
            port: 5000,
            hot: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html')
            }),
            isProduction ? new MiniCssExtractPlugin() : '',
            isBundleAnalyzerPlugin ? new BundleAnalyzerPlugin() : ''
        ],
        optimization: {
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: 4,
                cacheGroups: {
                    'react-vendor': {
                        test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                        name: 'react-vendor',
                        priority: 99,
                        minSize: 0,
                        minChunks: 1,
                    },
                    // 'common-tools': {
                    //     test: /[\\/]((src[\\/]tools[\\/](common))|(node_modules[\\/](date-fns|rmc-nuka-carousel|get-intrinsic|rmc-dialog|@babel|scheduler|path-to-regexp|object-keys|rc-gesture|css-animation|react-is|regenerator-runtime|babel-runtime|rmc-notification)))[\\/]/,
                    //     name: 'common-tools',
                    //     priority: 99,
                    //     minSize: 0,
                    //     minChunks: 1,
                    // },
                },
            },
            // runtimeChunk: {
            //     name: (entrypoint) => `runtime-${entrypoint.name}`,
            // }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/i,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.less$/i,
                    use: [
                        stylesHandler,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
    
                                },
                            },
                        },
                        'postcss-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javescriptEnabled: true,
                                }
                            }
                        }
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [stylesHandler, 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset',
                },
    
                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
    };
};

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cont = process.env.NODE_ENV === "production"
module.exports = {
    //    模式
    mode: "development",
    //入口
    entry: '../src/index.tsx', // 相对路径
    // 输入
    output: {
        //    文件输出路径
        path: cont ? path.resolve(__dirname, '../dist') : undefined,
        //    文件名
        filename: "js/[name].js",
        publicPath: "/",
        chunkFilename: "js/[name].chunk.js",
        clean: true
    },
    //    加载器
    module: {
        rules: [
            {test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/},
            //    loader配置
            {
                test: /\.css$/, // 检测.css结尾文件
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    //   插件
    plugins: [
        new HtmlWebpackPlugin({
            title: '博客前台',
            template: path.resolve(__dirname, "../public/index.html"),
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]-[hash:3].css",
        }),
    ],
    // 解析模块
    resolve: {
        extensions: ['*', '.js', '.jsx', ".json", ".tsx", ".ts"],
    },
}
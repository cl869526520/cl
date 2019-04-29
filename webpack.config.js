const path = require("path")
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const vueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
    //入口
    entry: path.join(__dirname, "/src/main.js"),

    //出口
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            //指定 模板 页面,将来会根据指定的页面路径,去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html' //指定生成页面的名称
        }),
        new vueLoaderPlugin()
    ],
    //配置所有第三方loader模块的规则  
    module: {
        rules: [
            // {处理文件类型(正则),处理css文件的loader}
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif|jepg)$/, use: 'url-loader?limit=23267' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    // resolve: {
    //     alias: {
    //         "vue$": "vue/dist/vue.js"
    //     }
    // },


    //模式
    mode: 'development'
}
import path from "path"
import { Configuration } from "webpack"
// const HtmlWebpackPlugin = require("html-webpack-plugin");   //ts support both require & import 语法 in node enviroment, target is cjs
import HtmlWebpackPlugin from "html-webpack-plugin"


const pathresolve = path.resolve
export interface WebpackConfiguration extends Configuration {
    devServer?: object
}

export enum WebPackConfigMode {
    production = "production",
    developement = "development",
    none = "none",
}
export enum DevTool {
    Source_Map = "source-map",
    inline = "inline-source-map", // 嵌入到源文件中
    eval_source_map = "eval-source-map", // 将 SourceMap 嵌入到每个模块中
    hidden = "hidden-source-map", // SourceMap 不在源文件中引用
    cheap = "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
    cheap_module = "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
    EVAL = "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。
}
export enum Target {
    WEBWORKER = "webworker", // WebWorker
    NODE = "node", // node.js 通过 require
    ASYNC_NODE = "async-node", // Node.js 通过 fs and vm
    NODE_WEBKIT = "node-webkit", // nw.js
    ELECTRON = "electron-main", // electron，主进程(main process)
    ELECTRON_RENDERER = "electron-renderer", // electron，渲染进程(renderer process)
}

let config: WebpackConfiguration = {
    mode: WebPackConfigMode.developement,
    entry: pathresolve("./src/main.tsx"),
    output: {
        path: pathresolve("dist"),
        filename: "[name].bundle.[fullhash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                [
                                    '@babel/preset-react',
                                    { pragma: 'createElement' },
                                ],
                            ],
                        },
                    },
                    { loader: 'ts-loader' },
                ]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-react-jsx'],
                    },
                },
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack+React",
            template: pathresolve("./public/index.html"),
            filename: "index.html"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    }
}

export default config

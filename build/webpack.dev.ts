import webpackMerge from "webpack-merge"
import mergeConfig from "./webpack.merge"
import {WebPackConfigMode,DevTool} from "./webpack.merge"
import { WebpackConfiguration } from "./webpack.merge"
const dev:WebpackConfiguration = {
    mode: WebPackConfigMode.developement,
    devtool: DevTool.Source_Map,
}

export const DevConfig = webpackMerge(mergeConfig,dev)
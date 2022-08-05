import WebpackMerge from "webpack-merge"
import mergeConfig from "./webpack.merge"
import {WebPackConfigMode,DevTool} from "./webpack.merge"
import { WebpackConfiguration } from "./webpack.merge"
const dev:WebpackConfiguration = {
    mode: WebPackConfigMode.production,
    devtool: DevTool.cheap_module,
}
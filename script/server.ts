import webpack from "webpack"
import WebPackConfig from "../build/webpack.merge"
import WebpackDevServer from "webpack-dev-server"
import {Configuration} from "webpack-dev-server"

export interface ServerConfiguration extends Configuration{}

const complier = webpack(WebPackConfig)


// complier.run((err,stat)=>{
//     err && console.log(err)
// })  
let ServerConfig:ServerConfiguration = {
    host:"127.0.0.1",
    port:3000,
    hot:true,
    open:false,
}
const devServer = new WebpackDevServer(ServerConfig,complier)
devServer.start()
devServer.stopCallback(()=>{
    console.log("serverstop")
})


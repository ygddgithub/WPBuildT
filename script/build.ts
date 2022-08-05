import child_process from "child_process"
import path from 'path'
import webpack from "webpack"
import WebPackConfig from "../build/webpack.merge"
import WebpackDevServer from "webpack-dev-server"
import {Configuration} from "webpack-dev-server"

const complier = webpack(WebPackConfig)

let del = child_process.spawn(path.resolve("./script/deletedist.cmd"))
del.stdout.on("data",(data)=>{
    console.log(`${data}`)
})
del.on("exit",()=>{
    console.log("SUCCESS DEL DIST")
    complier.run((err,stat)=>{
        err && console.log(err)
    })  
})



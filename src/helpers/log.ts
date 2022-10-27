import logger from "pino"
import dayjs from "dayjs"

const log = logger({
    transport:{
        target:"pino-pretty",
        options:{
            colorize:true,
            customColors: 'err:red,info:blue', 
            ignore: 'pid,hostname',
        }
    },


    
    timestamp:() =>`,"time" : " ${dayjs().format()}"`,
})


export default log
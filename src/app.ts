import * as  exprss from "express"
import cors from  "cors"
import morgan from "morgan"

class App{
    public express :exprss.Application

    constructor(){
        this.express = exprss()
        this.setMiddleware()
        this.setRoutes()
        this.connectToDB()
        this.catchError()

    }

    private setMiddleware() :void{
        this.express.use(cors())
        this.express.use(exprss.json())
        this.express.use(morgan("dev"))

    }

    private setRoutes() :void {

    }

    private async connectToDB() : Promise<void> {

    }

    private catchError() :void{

    }
}



export default new App().express;
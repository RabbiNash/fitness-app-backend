import { Express, Response ,Request } from "express";
import swaggerJsDoc from 'swagger-jsdoc' // it reads the jsDoc -annoted source code and generates an OenAPI(swagger documentation)
import swaggerUi from 'swagger-ui-express'
import log from "./log"



const options :swaggerJsDoc.Options = {
    definition:{
        openapi :'3.0.0',
        info:{
            title:"Fitness_APP  API documentation",
            version:"1.0"
        },
    },
    //an array of paths where your APIs are defined
    apis:[
        "./src/*/*.ts" ,
         "./src/api/auth/user/*.ts" ,
         "./src/api/workout/Exercise/*.ts"
        ]
    
}

const swaggerSpecification = swaggerJsDoc(options)

/** funtion to create some endpoints */

function swaggerDocs(app:any , port :number){
    //swagger page

    app.use('/docs' , swaggerUi.serve , swaggerUi.setup(swaggerSpecification))

    //Docs in json format
    app.get('docs.json', (req:Request , res:Response) =>{
        res.setHeader("Content-Type" , "application/json");
        res.send(swaggerSpecification)

    })

    log.info(`Doc  available at http:localhost:${port}/docs`)
}


export default swaggerDocs



import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiV1 from "../src/api/index";
import postgresDdClient from "./config/pgDb.config";


class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setMiddleware();
    this.setRoutes();
    this.connectToDB();
    this.catchError();
  }

  private setMiddleware(): void {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(morgan("dev"));
  }

  private setRoutes(): void {
    this.express.use("/api/v1", apiV1);
  }

  private async connectToDB(): Promise<void> {
    try {
      await postgresDdClient.authenticate()
        console.log("database connected successfully !!!");
        
    } catch (error) {
      console.log(error.message)
        
    }
  
  }

  private catchError(): void {}
}

export default new App().express;

import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiV1 from "../src/api/index";
import { PgDbHelper } from "./config/pgDb.config";

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
    (await PgDbHelper.connect()).authenticate();

    console.log("database connection");
  }

  private catchError(): void {}
}

export default new App().express;

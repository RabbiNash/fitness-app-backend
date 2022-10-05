import { Sequelize } from "sequelize";

export class PgDbHelper {

    public static client:Sequelize

    public static async connect () :Promise<Sequelize> {

        try {
            this.client = new Sequelize('dashboard', 'postgres', "1311", {
                host: 'localhost',
                dialect: "postgres",
                logging:false
              });

              return this.client
            
        } catch (error) { 
            throw error
            
        }
    }

}


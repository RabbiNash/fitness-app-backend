// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import workoutTypeModel from "../workoutType/workoutType.model";
import {workoutTypeClass} from "./workoutType.class";
import {v4 as uuidv4} from "uuid";


export default class workoutTypeservice {


    public addworkoutTypeRepository = async (workoutTypeOptions: workoutTypeClass): Promise<any> => {
        let workoutType = await workoutTypeModel.create({
            ...workoutTypeOptions,
            Id: uuidv4()

        });

        return workoutType
    };

    public getworkoutTypeRepository = async (Id: string): Promise<any> => {

        try {
            let workoutTypeFound = await workoutTypeModel.findByPk(Id)


            return workoutTypeFound
        } catch (error) {

            console.log(error)

        }
    }

    public getAllworkoutCategoriesRepository = async (): Promise<any> => {

        try {
            let workoutCategoriessFound = await workoutTypeModel.findAll()

            return workoutCategoriessFound


        } catch (error) {

            console.log(error)

        }

    }

    public upDateworkoutTypeRepository = async (updateOptions: { [x: string]: any; }): Promise<any> => {

        try {
            //return the number of destroyed rows
            let workoutTypesFound = await workoutTypeModel.update({
                ...updateOptions

            }, {
                where: {
                    Id: updateOptions.Id
                }
            })

            return workoutTypesFound


        } catch (error) {

            console.log(error)

        }

    }

    public deleteworkoutTypeRepository = async (Id: string): Promise<any> => {
        try {
            //return the number of destroyed rows
            let deletedworkoutType = await workoutTypeModel.destroy({
                where: {
                    Id: Id
                }
            })


            return deletedworkoutType
        } catch (error) {

            console.log(error)

        }

    }
}

/**this file contains the user interface  */

import {DataTypes } from "sequelize"

export interface IUser {

    id:DataTypes.IntegerDataType;
    displayName:string;
    email:string;
    photoURL:string
}
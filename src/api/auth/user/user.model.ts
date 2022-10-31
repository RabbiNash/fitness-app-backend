<<<<<<< HEAD
import {DataTypes, Sequelize} from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
import {v4 as uuidv4} from 'uuid';


const User = postgresDdClient.define("user", {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,

    },
    displayName: {
        type: DataTypes.STRING,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photoURL: {
        type: DataTypes.STRING,
    },
});

=======
import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
import { v4 as uuidv4 } from 'uuid';




const User = postgresDdClient.define("user", {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  
  },
  displayName: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoURL: {
    type: DataTypes.STRING,
  },
});

/**
 * schemas for swagger API
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         displayName:
 *           type: string
 *           default: jane
 *         password:
 *           type: string
 *           default: password
 *         photoURL:
 *           type: string
 *     UpdateUser:
 *       type: object
 *       required:
 *         - Id
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         Id:
 *           type: string
 *           default: 6effe544-4c66-434a-b752-89603c57f47
 *         displayName:
 *           type: string
 *           default: jane
 *         password:
 *           type: string
 *           default: password
 *         photoURL:
 *           type: string
 *           
 *     CreateUserResponce:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         displayame:
 *           type: string
 *         Id:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string

 */

>>>>>>> actions2
export default User;

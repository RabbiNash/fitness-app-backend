"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc")); // it reads the jsDoc -annoted source code and generates an OenAPI(swagger documentation)
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const log_1 = __importDefault(require("./log"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Fitness_APP  API documentation",
            version: "1.0",
        },
    },
    //an array of paths where your APIs are defined
    apis: [
        "./src/*/*.ts",
        "./src/api/auth/user/*.ts",
        "./src/api/workout/WorkoutCategory/*.ts",
        "./src/api/workout/WorkoutType/*.ts",
        "./src/api/workout/Excercise/*.ts",
    ],
};
const swaggerSpecification = (0, swagger_jsdoc_1.default)(options);
/** funtion to create some endpoints */
function swaggerDocs(app, port) {
    //swagger page
    app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpecification));
    //Docs in json format
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpecification);
    });
    log_1.default.info(`Docs available at http:localhost:${port}/docs`);
}
exports.default = swaggerDocs;

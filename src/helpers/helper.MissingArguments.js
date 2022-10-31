"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckMissingParams = void 0;
const CheckMissingParams = (requiredPars, passedPars) => {
    return Promise.resolve(requiredPars.filter((par) => passedPars[par] === null || passedPars[par] === undefined));
};
exports.CheckMissingParams = CheckMissingParams;

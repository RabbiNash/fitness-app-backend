"use strict";
/**this file contains the user interface  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutTypeClass = void 0;
class workoutTypeClass {
    constructor(workoutTypeName, workoutTypeNotes = "", workoutCategoryId) {
        this.workoutTypeNotes = "";
        (this.workoutTypeName = workoutTypeName),
            (this.workoutTypeNotes = workoutTypeNotes);
        this.workoutCategoryId = workoutCategoryId;
    }
}
exports.workoutTypeClass = workoutTypeClass;

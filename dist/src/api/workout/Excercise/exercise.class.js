"use strict";
/**this file contains the user interface  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseClass = void 0;
class ExerciseClass {
    constructor(exerciseName, exerciseNotes = "", weight = 0, reps = 0, duration = 0.0, distance = 0, userId, workoutTypeId) {
        (this.exerciseName = exerciseName),
            (this.exerciseNotes = exerciseNotes),
            (this.weight = weight),
            (this.reps = reps),
            (this.duration = duration),
            (this.distance = distance);
        this.userId = userId,
            this.workoutTypeId = workoutTypeId;
    }
}
exports.ExerciseClass = ExerciseClass;

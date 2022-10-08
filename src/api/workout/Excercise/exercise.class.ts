/**this file contains the user interface  */

export class ExerciseClass {
  private exerciseName: string;
  private exerciseNotes: string;
  private weight: number;
  private reps: number;
  private duration: number;
  private distance: number;

  constructor(
    exerciseName: string,
    exerciseNotes: string = "",
    weight: number = 0,
    reps: number = 0,
    duration: number = 0.0,
    distance: number = 0
  ) {
    (this.exerciseName = exerciseName),
      (this.exerciseNotes = exerciseNotes),
      (this.weight = weight),
      (this.reps = reps),
      (this.duration = duration),
      (this.distance = distance);
  }
}

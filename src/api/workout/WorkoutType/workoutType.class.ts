/**this file contains the user interface  */

export class workoutTypeClass {
  private workoutTypeName: string;

  private workoutTypeNotes: string = "";
  private workoutCategoryId: string;

  constructor(
    workoutTypeName: string,
    workoutTypeNotes: string = "",
    workoutCategoryId: string
  ) {
    (this.workoutTypeName = workoutTypeName),
      (this.workoutTypeNotes = workoutTypeNotes);
    this.workoutCategoryId = workoutCategoryId;
  }
}

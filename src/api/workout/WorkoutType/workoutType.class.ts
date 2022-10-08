/**this file contains the user interface  */


export class workoutTypeClass  {
  private workoutTypeName:string
  private Id :string
  private workoutTypeNotes:string =""

  constructor(workoutTypeName:string , workoutTypeNotes: string ="" ,Id:string ){
    this.workoutTypeName = workoutTypeName ,
    this.workoutTypeNotes = workoutTypeNotes
    this.Id = Id

  }


  
}




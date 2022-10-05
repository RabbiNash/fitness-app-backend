/**this file contains the user interface  */
export class UserClass {
  id?: number;
  displayName: string;
  email: string;
  password: string;
  photoURL: string;

  constructor(displayName: string, email: string , password :string , photoURL? :string) {

    this.displayName = displayName;
  }
}

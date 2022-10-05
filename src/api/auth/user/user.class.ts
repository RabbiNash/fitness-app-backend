/**this file contains the user interface  */
import IUser from "./user.interface"

export class UserClass  implements IUser{


  constructor(displayName: string, email: string , password :string , photoURL? :string) {

    this.displayName = displayName;
    this.email = email;
    this.password = password;
    this.photoURL = photoURL !
  }
    id?: number | undefined;
    displayName: string;
    email: string;
    password: string;
    photoURL: string;
    nickname:string;
}

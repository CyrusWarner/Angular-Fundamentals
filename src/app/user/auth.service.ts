import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName:string, password:string){
        this.currentUser = {
            id: 1,
            firstName: userName,
            lastName: 'Warner',
            userName: 'CyrusW'
        }
    }

    isAuthenticated() {
        if(this.currentUser){
            return true;
        }
        return false;
    }

    updateCurrentUser(firstName:string, lastName:string){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
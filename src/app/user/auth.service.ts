import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
@Injectable()
export class AuthService {
    currentUser: IUser
    constructor(private http:HttpClient) {}
    loginUser(userName:string, password:string) {
      let loginInfo = {
        username: userName,
        password: password,
      }
      let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
      return this.http.post('/api/login', loginInfo, options)
      .pipe(tap(data => {
        this.currentUser = <IUser>data['user'];
      }))
      .pipe(catchError(err => {
        return of(false);
      }))
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

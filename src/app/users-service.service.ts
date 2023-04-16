import { Injectable } from '@angular/core';
import { User } from './interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor() { }

  getUserList() {
    return localStorage.getItem("UserList");
  }
  setUserList(newUserList: User[]) {
    localStorage.setItem("UserList",JSON.stringify(newUserList));
  }
  getCurrentUser(): User | null {
    const currentUser = localStorage.getItem("currentUser");

    if(currentUser !== null){
      return  JSON.parse(currentUser);
    } else {
      return null
    }
  }
  setCurrentUser(newCurrentUser: User | null) {
    localStorage.setItem("currentUser",JSON.stringify(newCurrentUser));
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersServiceService } from '../users-service.service';
import { User } from '../interfaces/users';
import { UserClass } from '../classes/user-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent  implements OnInit{

  constructor(
    private _userservice: UsersServiceService,
    private router: Router
  ){}

  ngOnInit(){
    const UserListCall = this._userservice.getUserList();
    if(UserListCall !== null) {
      this.UserList = JSON.parse(UserListCall);
    }
  }

  UserList: User[] = [];
  currentUser: undefined | User;
  isLoginMode: boolean = true;
  customError: boolean = false;
  

  switchMode(userForm: NgForm) {
    this.isLoginMode = !this.isLoginMode;

    userForm.resetForm();
  }
  onFormSubmit(userForm: NgForm) {
    if(!userForm.valid) {
      return;
    }
    if(!this.isLoginMode){
      this.UserList.push(new UserClass(userForm.value.email, userForm.value.password));
      this._userservice.setUserList(this.UserList);

      const isUserExist = this.UserList.find(user => user.email == userForm.value.email && user.password == userForm.value.password);
      this._userservice.setCurrentUser(userForm.value);
      window.location.replace("home")
    }
    if(this.isLoginMode){
      const isUserExist = this.UserList.find(user => user.email == userForm.value.email && user.password == userForm.value.password);
      if(isUserExist) {
        this._userservice.setCurrentUser(userForm.value);
        window.location.replace("home")
      }
      if(isUserExist == undefined) {
        this.customError = true;
      }
    }
  }
}

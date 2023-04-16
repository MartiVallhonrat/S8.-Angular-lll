import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersServiceService } from './users-service.service';
import { User } from './interfaces/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'S8.-Angular-lll';
  currentUser: null | User = null; 

  ngOnInit(): void {
    this.currentUser = this._userservice.getCurrentUser();
  }
  
  constructor(private router: Router, private _userservice: UsersServiceService){}

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  Logout() {
    this._userservice.setCurrentUser(null);
    window.location.reload();
  }
}

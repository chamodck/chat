import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { MessageService } from '../message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService,private authService: AuthService,
    private router: Router,private messageService: MessageService) { }

  ngOnInit() {
  	// get users from secure api end point
    if(this.authService.isLoggedIn()){
      this.userService.getUsers()
        .subscribe(users => {
            this.users = users;
            console.log(users);
        },
        error => {
          console.log(error);
        });
    }else{
      this.router.navigate(['/login']);
    }
  }

  createNewMessageGroup(friendId) {
      this.messageService.createNewMessageGroup(friendId)
      .subscribe(
          data => {
          console.log(data);
        },
        error => {
          console.log(error);
      });
  } 
}
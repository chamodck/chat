import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService,) { }

  ngOnInit() {
  	// get users from secure api end point
   	this.userService.getUsers()
        .subscribe(users => {
            this.users = users;
        },
        error => {
        	console.log(error);
      	});
  }

}

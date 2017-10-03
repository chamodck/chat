import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any = [];
  model: any = {};

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit() {
    
  }

  register() {
    
    this.authService.register(this.model)
    .subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
      });
  }

}
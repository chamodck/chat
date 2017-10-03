import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser : any=undefined;

  constructor(private authService: AuthService,private router: Router) { 
  	
  }

  ngOnInit() {
  	this.currentUser=this.authService.getCurrentUser();
  	
  }

  logout(){
    this.authService.removeToken();
    location.href='/';
  }

  login(){
    this.router.navigate(['/login']);
  }

  register(){
    this.router.navigate(['/register']);
  }

}

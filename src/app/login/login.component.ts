import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
	 model: any = {};
   
   error:String = '';
  	constructor(private authService: AuthService,private router: Router) { }

  	ngOnInit() {
  	}

    emailFormControl = new FormControl('', [Validators.required,Validators.pattern(EMAIL_REGEX)]);
    passwordFormControl = new FormControl('', [Validators.required]);

  	login() {
    	this.authService.login(this.model)
    	.subscribe(
      		data => {
          if(data.success){
            
            location.href='/';//reload poge
            
          }else{
            this.error=data.message;
          }
        	
      	},
      	error => {
        	console.log(error);
      	});
  	}	

  	getToken(): void {
        this.authService.getToken();
    }
}
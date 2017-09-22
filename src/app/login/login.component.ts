import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 model: any = {};
   
   error:String = '';
  	constructor(private authService: AuthService,private router: Router) { }

  	ngOnInit() {
  	}

  	login() {
    
    	this.authService.login(this.model)
    	.subscribe(
      		data => {
          if(data.success){
            this.router.navigate(['/index']);
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
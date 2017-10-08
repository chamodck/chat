import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {

  users: any = [];
  model: any = {email:'',username:'',password:'',confirmPassword:''};
  message:String = '';
  constructor(private authService: AuthService,private router: Router) { }
  

  

  register(model:any) {
    
    this.authService.register(model)
    .subscribe(
      data => {
        
        if(data.success){
          
          this.router.navigate(['/login']);
        }else{
          this.message=data.message;
        }
        
      },
      error => {
        console.log(error);
      });
  }

   
}


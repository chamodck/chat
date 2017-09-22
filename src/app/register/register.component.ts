import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any = [];
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	// this.authService.getAllPosts().subscribe(posts => {
   //    this.users = users;
   //  });
  }

  register() {
    
    this.authService.register(this.model)
    .subscribe(
      data => {
        //this.alertService.success('Registration successful', true);
        //this.router.navigate(['/login']);
        console.log(data);
      },
      error => {
        // this.alertService.error(error);
        //   this.loading = false;
        alert('no');
      });
  }

}

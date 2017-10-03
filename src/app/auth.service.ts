import { Injectable } from '@angular/core';
import { Http ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  currentUser : any=localStorage.getItem("currentUser");

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllUsers() {
    return this.http.get('/api/users')
      .map(res => res.json());
  }

  register(user:any){
  	return this.http.post('/api/register', user)
  	.map(res => res.json());
  }

  login(user:any){
    return this.http.post('/api/authenticate', user)
    .map(res=> {
      // login successful if there's a jwt token in the response
      if (res.json()) {

        if(res.json().success){
          var currentUser=JSON.stringify({_id:res.json()._id,email:res.json().email,username:res.json().username,token:res.json().token}) ;
          this.setToken(currentUser);
          return {success:true,message:'Authentication Successful.'};
        }else{
          return {success:false,message:res.json().message};
        }
      } else {
        
        return {success:false,message:'Authentication failed.'};
      }
    });
    
  }

  setToken(user :any){
    console.log(user);
    localStorage.setItem("currentUser", user);
  }

  getToken(){
    var user=localStorage.getItem("currentUser");
    if(user){
      return JSON.parse(user).token;
    }else{
      return '';
    }
    
  }

  getCurrentUser(){
    var user=localStorage.getItem("currentUser");
    if(user){
      return JSON.parse(user);
    }else{
      return undefined;
    }
    
  }

  getCurrentUserId(){
    var user=localStorage.getItem("currentUser");
    if(user){
      return JSON.parse(user)._id;
    }else{
      return '';
    }
  }

  isLoggedIn(){
    var user=localStorage.getItem("currentUser");
    if(user){
      return true;
    }else{
      return false;
    }
  }

  removeToken(){
    localStorage.removeItem("currentUser");
  }

  getHTTPHeader(){
    let headers = new Headers({ 'token':  this.getToken() });
    let options = new RequestOptions({ headers: headers });
    return options;
  }
  
}
import { Injectable } from '@angular/core';
import { Http ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {

  constructor(private http: Http,private authService:AuthService) 
  {

  }

  getUsers(){
	
  	return this.http.get('/api/users',this.authService.getHTTPHeader())
  		.map(res => res.json());
  }

  getAllFriends(){

  	return this.http.get('/api/getAllFriends/'+this.authService.getCurrentUserId(),this.authService.getHTTPHeader())
  		.map(res => res.json());
  }

}
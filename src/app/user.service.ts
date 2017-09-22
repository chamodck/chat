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
	let headers = new Headers({ 'token':  this.authService.getToken() });
    let options = new RequestOptions({ headers: headers });

  	return this.http.get('/api/users',options)
  		.map(res => res.json());
  }

}
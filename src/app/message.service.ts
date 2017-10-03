import { Injectable } from '@angular/core';
import { Http ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class MessageService {

  constructor(private http: Http,private authService:AuthService) { }

  createNewMessageGroup(friendId){
  	return this.http.put('/api/createNewMessageGroup/'+friendId+'/'+this.authService.getCurrentUserId(),null, this.authService.getHTTPHeader())
  		.map(res => res.json());
  }

}

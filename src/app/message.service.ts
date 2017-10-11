import { Injectable } from '@angular/core';
import { Http ,Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';


@Injectable()
export class MessageService {
  private socket: SocketIOClient.Socket;
  constructor(private http: Http,private authService:AuthService) { 
    
  }

  createNewMessageGroup(friendId){
  	return this.http.put('/api/createNewMessageGroup/'+friendId+'/'+this.authService.getCurrentUserId(),null, this.authService.getHTTPHeader())
  		.map(res => res.json());
  }

  getMessageGroup(id){
  	return this.http.get('/api/getMessageGroup/'+id,this.authService.getHTTPHeader())
    .map(res => res.json());
  }

  sendMessage(messageOb:any){
  	return this.http.post('/api/sendMessage', messageOb,this.authService.getHTTPHeader())
  	.map(res => res.json());
  }

}
